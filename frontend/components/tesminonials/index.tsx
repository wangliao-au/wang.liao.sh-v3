import AppsIcon from "@mui/icons-material/Apps";
import { Button, Divider, Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Flex } from "../styles/flex";

export const Testimonials = () => {
  const [isMobileWidth, setIsMobileWidth] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileWidth(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Flex
        direction={"column"}
        css={{
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          px: "$6",
          mt: "$20",
          "@sm": {
            mt: "$0",
            justifyContent: "space-around",
            px: "$32",
            flexDirection: "row-reverse",
          },
          "@md": {
            px: "$64",
          },
        }}
      >
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
            Most Recent Project
          </Text>
          <Flex
            css={{ gap: "$3", pb: "10pt" }}
            align={"center"}
            direction={"row"}
          >
            <img
              src={"/icons/eventstar.png"}
              alt="event-star"
              width={30}
              height={30}
              style={{ marginBottom: "0.5rem" }}
            />
            <Text h2>EventStar</Text>
          </Flex>
          <Text span css={{ color: "$accents8", maxW: "550px", pb: "$8" }}>
            EventStar is a fully responsive, cloud-based B2C event management
            platform that empowers organizations to create, manage, sell tickets,
            and track statistics. It also provides a seamless experience for
            users to discover and purchase tickets to events.
          </Text>
          <Button
            color="gradient"
            shadow
            onClick={() => window.open("https://eventstar-app.liao.sh/")}
            css={{ mt: "$8", zIndex: 0 }}
            ghost
            iconRight={<AppsIcon />}
          >
            View Project
          </Button>
        </Flex>
        <Flex>
          <img
            src={"/eventstar.svg"}
            alt="event-star"
            width={500}
            height={400}
          />
        </Flex>
      </Flex>
      {/* <Divider
        css={{
          position: "absolute",
          inset: "0p",
          left: "0",
          mt: "$5",
        }} */}
    </>
  );
};
