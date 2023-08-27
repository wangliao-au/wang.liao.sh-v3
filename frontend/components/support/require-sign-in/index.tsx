import React from "react";
import { Flex } from "../../styles/flex";
import { Text, Divider } from "@nextui-org/react";
import { ModalLogin, ModalSignUp } from "../../modal";

export const RequireSignIn = () => {
  return (
    <>
      <Flex
        direction={"column"}
        css={{
          py: "$8",
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
          <img src="/support.png" alt="Secure Login" width={400} height={400} />
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
            Please{" "}
            <Text span css={{ color: "$primary" }}>
              Log In
            </Text>{" "}
            to access support.
          </Text>
          <Text
            h5
            css={{
              textAlign: "center",
              maxWidth: "600px",
              color: "$accents8",
              "@sm": { textAlign: "start" },
            }}
          >
            Become our customer to unlock fast and reliable services.
          </Text>
          <Flex
            css={{ gap: "$8", mt: "$8" }}
            align={"center"}
            direction={"row"}
          >
            <ModalLogin isSupport={true} />
            <ModalSignUp isSupport={true} />
          </Flex>
        </Flex>
      </Flex>
      <Divider
        css={{
          position: "absolute",
          inset: "0p",
          left: "0",  
        }}
      />
    </>
  );
};
