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
import { SmileOutlined } from "@ant-design/icons";
import type { NotificationPlacement } from "antd/es/notification/interface";
import confetti from "canvas-confetti";
import Drone from "../threejs/Drone";

type FormElement = HTMLInputElement | HTMLTextAreaElement;

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [messageText, setMessageText] = useState("");

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

  const openEmailModalHandler = () => {
    if (!isValidEmail) {
      openNotification("topRight", "Please enter a valid email address.");
      return;
    }
    setEmailModalOpen(true);
  };

  const closeEmailModalHandler = () => {
    setEmailModalOpen(false);
  };

  const sendEmailHandler = () => {
    openNotification(
      "topRight",
      "Thank you for your message!",
      "I will get back to you as soon as possible."
    );
    setEmailModalOpen(false);
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
    const cvFileUrl = "https://wang.liao.sh/resume/wang_liao_23m8.pdf";

    try {
      const response = await fetch(cvFileUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "wang_liao_cv_23m8.pdf"; // Set the desired filename
      anchor.style.display = "none";

      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      // Clean up the object URL
      URL.revokeObjectURL(url);
    } catch (error) {
      openNotification(
        "top",
        "Failed to download CV!",
        "Please try again later."
      );
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
            ☁️ 💻 Wang has a strong interest and proven expertise in Cloud +
            Full Stack Development.
          </Text>

          <Flex
            css={{
              gap: "$8",
              pt: "$16",
            }}
            wrap={"wrap"}
          >
            {/* Email Contact */}
            <Button color="gradient" onPress={downloadCVHandler} shadow>
              Download CV
            </Button>
            <Input
              clearable
              contentRightStyling={false}
              placeholder="Enter your email here"
              onChange={handleEmailChange}
              labelLeft="email"
              contentRight={
                <ContactButton onClick={openEmailModalHandler}>
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
              <Modal.Body css={{ py: "$14" }}>
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
                  onPress={closeEmailModalHandler}
                >
                  Close
                </Button>
                <Button auto onPress={sendEmailHandler}>
                  Send
                </Button>
              </Modal.Footer>
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
              <CheckIcon /> 1 &times; Casual SWE
            </Flex>
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
              <CheckIcon /> 4 &times; Internship
            </Flex>
          </Flex>
        </Box>
        <Box
          css={{
            "& img": {
              width: "775px",
              objectFit: "contain",
            },
          }}
        >
        <Drone />
        </Box>
      </Flex>
      <Divider
        // css={{ position: "absolute", inset: "0p", left: "0" }}
      />
    </>
  );
};
