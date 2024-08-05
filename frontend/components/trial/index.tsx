import {
  Button,
  Divider,
  FormElement,
  Input,
  Loading,
  Modal,
  Text,
  Textarea,
} from "@nextui-org/react";
import React, { ChangeEvent, useState } from "react";
import { Flex } from "../styles/flex";
import { notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Face2Icon from "@mui/icons-material/Face2";
import apiRequest from "../../utils/api";
import confetti from "canvas-confetti";

export const Trial = () => {
  const [email, setEmail] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false);

  const openNotification = (
    placement: NotificationPlacement,
    msg: string,
    description?: string
  ) => {
    api.info({
      duration: 3.5,
      message: msg,
      description: description,
      icon: <Face2Icon />,
    });
  };

  const openModalHandler = () => {
    setModalOpen(true);
  };
  const closeModalHandler = () => {
    setModalOpen(false);
  };

  const sendHandler = async () => {
    setIsLoading(true);
    const response = await apiRequest("POST", "/api/contact/send", {
      email: email,
      message: messageText,
    });
    if (response.status == 200) {
      setModalOpen(false);
      openNotification(
        "topRight",
        "Thank you for your message!",
        "I will get back to you as soon as possible."
      );
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } else {
      openNotification(
        "topRight",
        response.message,
        "Server is terminated due to unaffordable hosting cost. 😢"
      );
    }
    setIsLoading(false);
  };

  const handleChange = (e: ChangeEvent<FormElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

  return (
    <>
      {contextHolder}
      <Flex
        css={{
          px: "$6",
          py: "$20",
        }}
        justify={"center"}
        direction={"column"}
        align={"center"}
      >
        <Text h2>Let's connect</Text>
        <Text
          span
          css={{
            color: "$accents8",
            pb: "$15",
            textAlign: "center",
          }}
        >
          I'm always open to new opportunities and projects. Feel free to reach
          out!
        </Text>

        <Button
          css={{ zIndex: 0 }}
          auto
          onClick={openModalHandler}
          color="gradient"
          shadow
          ghost
          iconRight={<MailOutlineIcon />}
        >
          Shoot me a message
        </Button>
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={modalOpen}
          onClose={closeModalHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              <div style={{ display: "flex", alignItems: "center" }}>
                Thanks for reaching out.{" "}
              </div>
            </Text>
          </Modal.Header>
          {isLoading ? (
            <>
              <Modal.Body css={{ py: "$14" }}>
                <Loading type="gradient" />
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </>
          ) : (
            <>
              <Modal.Body css={{ pt: "$8", pb: "$14" }}>
                <Input
                  autoFocus
                  css={{ pb: "$12" }}
                  bordered
                  clearable
                  placeholder="Enter your email"
                  onChange={handleChange}
                  labelLeft="email"
                />
                <Textarea
                  labelPlaceholder="Enter your message here..."
                  status="default"
                  rows={14}
                  bordered
                  onChange={(e) => setMessageText(e.target.value)}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button
                  auto
                  ghost
                  color="error"
                  onPress={closeModalHandler}
                  css={{ zIndex: 0 }}
                >
                  Close
                </Button>
                <Button
                  auto
                  color="primary"
                  onPress={sendHandler}
                  css={{ zIndex: 0 }}
                >
                  Send
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
