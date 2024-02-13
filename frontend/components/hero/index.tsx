import {
  Button,
  Divider,
  Input,
  Text,
  Modal,
  Textarea,
} from "@nextui-org/react";
import React, { ChangeEvent, useState } from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { ContactButton } from "../icons/ContactButton";
import { ContactIcon } from "../icons/ContactIcon";
import { notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";
import confetti from "canvas-confetti";
import Drone from "../threejs/Drone";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Face2Icon from "@mui/icons-material/Face2";
import apiRequest from "../../utils/api";
import { Loading } from "@nextui-org/react";

type FormElement = HTMLInputElement | HTMLTextAreaElement;

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [messageText, setMessageText] = useState("");
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

  const openEmailModalHandler = () => {
    if (!isValidEmail) {
      openNotification("topRight", "Please enter a valid email.");
      return;
    }
    setEmailModalOpen(true);
  };

  const closeEmailModalHandler = () => {
    setEmailModalOpen(false);
  };

  const sendEmailHandler = async () => {
    setIsLoading(true);
    const response = await apiRequest("POST", "/api/contact/send", {
      email: email,
      message: messageText,
    });
    if (response.status == 200) {
      setEmailModalOpen(false);
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
      openNotification("topRight", response.message, "Please try again.");
    }
    setIsLoading(false);
  };

  const validateEmail = (inputEmail: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail) && inputEmail !== "";
  };

  const handleEmailChange = (e: ChangeEvent<FormElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  const downloadCVHandler = async () => {
    // Replace with the actual URL of your CV file
    const cvFileUrl = "https://wang.liao.sh/resume/WangLiao_UNSW_24m2.pdf";

    try {
      const response = await fetch(cvFileUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "WangLiao_UNSW_24m2.pdf"; // Set the desired filename
      anchor.style.display = "none";

      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      // Clean up the object URL
      URL.revokeObjectURL(url);
    } catch (error) {
      openNotification("top", "Failed to download CV!", "Please try again.");
    }

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    openNotification(
      "top",
      "Successfully downloaded CV!",
      "Thank you for your interest."
    );
  };

  return (
    <>
      {contextHolder}
      <Flex
        css={{
          gap: "$3",
          // pt: "$10",
          pb: "$20",
          px: "$6",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "90vh",
          "@sm": {
            flexDirection: "row",
            // mt: "$20",
          },
        }}
        justify={"center"}
      >
        <Box
          css={{
            pt: "6",
            display: "flex",
            flexDirection: "column",
            gap: "$5",
          }}
        >
          <Box
            css={{
              maxWidth: "600px",
            }}
          >
            <Text
              h1
              css={{
                display: "inline",
              }}
            >
              Welcome to{" "}
            </Text>
            <Text
              h1
              css={{
                display: "inline",
              }}
            >
              wang.liao.sh{" "}
            </Text>
            <br />
            <Text
              h1
              css={{
                display: "inline",
              }}
              color="primary"
            >
              Software Dev Studio
            </Text>
          </Box>

          <Text
            css={{
              color: "$accents8",
              maxWidth: "400px",
            }}
            size={"$lg"}
            span
          >
            💻 &nbsp; I am currently working as a Graduate
            Quality Engineer&nbsp;@&nbsp;
            <Text
              css={{
                display: "inline",
              }}
              color="primary"
              size={"$lg"}
              span
            >
              Tyro Payments.
            </Text>
          </Text>
          <Text
            css={{
              color: "$accents8",
              maxWidth: "400px",
            }}
            size={"$lg"}
            span
          >
            ☁️ &nbsp; I love my job, also quite into learning Cloud  & Web Development.
          </Text>
          <Flex
            css={{
              gap: "$8",
              pt: "$16",
            }}
            wrap={"wrap"}
          >
            {/* Email Contact */}
            <Button
              color="gradient"
              onPress={downloadCVHandler}
              shadow
              ghost
              iconRight={<PersonAddIcon />}
              css={{ zIndex: 0 }}
            >
              Download CV
            </Button>
            <Input
              clearable
              contentRightStyling={false}
              placeholder="Enter your email here"
              onChange={handleEmailChange}
              labelLeft="email"
              contentRight={
                <ContactButton
                  onClick={openEmailModalHandler}
                  css={{ zIndex: 0 }}
                >
                  <ContactIcon />
                </ContactButton>
              }
            />
            <Modal
              closeButton
              aria-labelledby="modal-title"
              open={emailModalOpen}
              onClose={closeEmailModalHandler}
            >
              <Modal.Header>
                <Text id="modal-title" size={18}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    Hello!{" "}
                    <Text
                      size={18}
                      color="primary"
                      style={{ marginLeft: "0.5rem" }}
                    >
                      {email}
                    </Text>
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
                  <Modal.Body css={{ py: "$14" }}>
                    <Textarea
                      autoFocus
                      labelPlaceholder="Enter your message here..."
                      status="default"
                      rows={14}
                      bordered
                      onChange={(e) => setMessageText(e.target.value)}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      css={{ zIndex: 0 }}
                      auto
                      ghost
                      color="error"
                      onPress={closeEmailModalHandler}
                    >
                      Close
                    </Button>
                    <Button auto onPress={sendEmailHandler} css={{ zIndex: 0 }}>
                      Send
                    </Button>
                  </Modal.Footer>
                </>
              )}
            </Modal>
          </Flex>
          <Flex
            wrap={"wrap"}
            css={{
              mt: "$8",
              gap: "$8",
              py: "$7",
              "@sm": {
                py: "$4",
              },
            }}
          >
            <Flex
              css={{
                color: "$accents7",
                alignItems: "center",
              }}
            >
              <CheckIcon /> 3 &times; AWS Certified
            </Flex>
            <Flex
              css={{
                color: "$accents7",
                alignItems: "center",
              }}
            >
              <CheckIcon /> 12 &times; Experiences
            </Flex>
          </Flex>
        </Box>
        <Drone />
        {/* <Box
          css={{
            "& img": {
              width: "775px",
              objectFit: "contain",
            },
          }}
        >
        </Box> */}
      </Flex>
      <Divider
      // css={{ position: "absolute", inset: "0p", left: "0" }}
      />
    </>
  );
};
