import {
  Button,
  Divider,
  FormElement,
  Input,
  Modal,
  Text,
  Textarea,
} from "@nextui-org/react";
import React, { ChangeEvent, useState } from "react";
import { Flex } from "../styles/flex";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import type { NotificationPlacement } from "antd/es/notification/interface";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export const Trial = () => {
  const [email, setEmail] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (
    placement: NotificationPlacement,
    msg: string,
    description?: string
  ) => {
    api.info({
      message: msg,
      description: description,
      icon: <SmileOutlined style={{ color: "#108ee9" }} rev />,
    });
  };

  const openModalHandler = () => {
    setModalOpen(true);
  };
  const closeModalHandler = () => {
    setModalOpen(false);
  };

  const sendHandler = () => {
    openNotification(
      "topRight",
      "Thank you for your message!",
      "I will get back to you as soon as possible."
    );
    setModalOpen(false);
  };

  const handleChange = (e: ChangeEvent<FormElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

  return (
    <>
      <Flex
        css={{
          py: "$20",
          px: "$6",
        }}
        justify={"center"}
        direction={"column"}
        align={"center"}
      >
        <Text h3>Let's connect</Text>
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

        <Button onClick={openModalHandler} color="gradient" shadow iconRight={<MailOutlineIcon />}>
            Contact Me
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
                Thanks for reaching out!{" "}
              </div>
            </Text>
          </Modal.Header>
          <Modal.Body css={{ pt: "$8", pb: "$14" }}>
            <Input
              css={{ pb: "$12" }}
              bordered
              clearable
              placeholder="Enter your email address"
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
            <Button auto flat color="error" onPress={closeModalHandler}>
              Close
            </Button>
            <Button auto onPress={sendHandler}>
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
