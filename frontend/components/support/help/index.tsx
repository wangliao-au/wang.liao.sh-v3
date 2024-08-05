import {
  Button,
  Card,
  Checkbox,
  Divider,
  Input,
  Text,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";
import { Flex } from "../../styles/flex";
import SendIcon from "@mui/icons-material/Send";
import confetti from "canvas-confetti";
import { notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";
import Face2Icon from "@mui/icons-material/Face2";

export const Help = () => {
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (
    placement: NotificationPlacement,
    msg: string,
    description?: string,
  ) => {
    api.info({
      duration: 3.5,
      message: msg,
      description: description,
      icon: <Face2Icon />,
    });
  };

  const sendRequestHandler = () => {
    openNotification(
      "topRight",
      "Your request has been sent!",
      "I will get back to you as soon as possible.",
    );
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };
  return (
    <>
      {contextHolder}
      <Flex
        direction={"column"}
        css={{
          py: "$18",
          gap: "4rem",
          justifyContent: "center",
          alignItems: "center",
          px: "$6",
          flexDirection: "column-reverse",
          "@sm": {
            justifyContent: "space-around",
            px: "$32",
            flexDirection: "row-reverse",
          },
          "@md": {
            px: "$64",
          },
        }}
      >
        <Flex>
          <Card css={{ width: "350px", "@sm": { width: "400px" } }}>
            <Card.Body css={{ pt: "$14", pb: "$8", px: "$16" }}>
              <Input
                css={{ pb: "$14" }}
                // bordered
                clearable
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                labelLeft="email"
              />
              <Textarea
                labelPlaceholder="Enter your request here"
                status="default"
                rows={14}
                bordered
                onChange={(e) => setRequest(e.target.value)}
              />
              <Checkbox
                css={{ pt: "$6", alignSelf: "end" }}
                size="sm"
                color="primary"
                labelColor="primary"
                isRounded
              >
                urgent
              </Checkbox>
            </Card.Body>
            <Card.Footer
              css={{ pb: "$12", px: "$16" }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                auto
                color="gradient"
                shadow
                ghost
                iconRight={<SendIcon />}
                onClick={sendRequestHandler}
                css={{ zIndex: 0 }}
              >
                Send Request
              </Button>
            </Card.Footer>
          </Card>
        </Flex>
        <Flex
          align={"start"}
          direction={"column"}
          css={{
            alignItems: "center",
            "@sm": {
              alignItems: "start",
            },
          }}
        >
          <Text span css={{ color: "$primary" }}>
            Support
          </Text>
          <Text h2 css={{ textAlign: "center", "@sm": { textAlign: "start" } }}>
            Thank you for choosing our Technical Services!
          </Text>
          <Text
            h5
            css={{
              textAlign: "center",
              maxWidth: "400px",
              color: "$accents8",
              "@sm": { textAlign: "start" },
            }}
          >
            Please fill out the form and we will get back to you in
            <Text span css={{ color: "$primary" }}>
              {" "}
              1-3{" "}
            </Text>
            business days.
          </Text>
        </Flex>
      </Flex>
      <Divider
        css={{
          position: "absolute",
          inset: "0p",
          left: "0",
          mt: "$5",
        }}
      />
    </>
  );
};
