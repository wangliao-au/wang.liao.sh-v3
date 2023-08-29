import { Divider, Grid, Text } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Flex } from "../styles/flex";

export const Trusted = () => {
  const { theme } = useTheme();
  const [brightIcon, setBrightIcon] = useState("");
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

  useEffect(() => {
    if (theme === "system") {
      const newIcon =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "bright-dark.png"
          : "bright-light.png";
      setBrightIcon(newIcon);
      return;
    }
    const newIcon = theme === "dark" ? "bright-dark.png" : "bright-light.png";    
    setBrightIcon(newIcon);
  }, []);

  return (
    <>
      <Flex
        direction={"column"}
        align={"center"}
        css={{
          px: "$6",
          pt: "$20",
          minHeight: "60vh",
          "@md": {
            px: "$64",
          },
        }}
      >
        <Text h2 css={{ textAlign: "center" }}>
          I'm proud to have worked with{" "}
          <Text span css={{ color: "$primary" }}>
            6+
          </Text>{" "}
          companies and organizations
        </Text>
        <Text
          css={{
            color: "$accents8",
            maxWidth: "800px",
            textAlign: "center",
          }}
          weight="normal"
          size={"$lg"}
        >
          I've experienced with a variety of environments and teams, from
          startups to Fortune 500 companies.
        </Text>
        {!isMobileWidth ? (
          <Grid.Container
            gap={6}
            css={{
              width: "100%",
              "@sm": {
                width: "100%",
              },
              "&  span": {
                whiteSpace: "pre",
              },
            }}
          >
            <Grid sm={4} xs={6} justify="center">
              <Flex align={"center"} justify={"center"}>
                <img
                  src={"/icons/volvo.svg"}
                  alt="Volvo"
                  width="45"
                  height="45"
                />
                &nbsp;&nbsp;
                <Text weight={"semibold"} span size={"$lg"}>
                  Volvo Cars
                </Text>
              </Flex>
            </Grid>
            <Grid sm={4} xs={6} justify="center">
              <Flex align={"center"}>
                <img src={"/icons/ibm.png"} alt="IBM" width="80" height="80" />
                &nbsp;
                <Text weight={"semibold"} span size={"$lg"}>
                  IBM
                </Text>
              </Flex>
            </Grid>
            <Grid sm={4} xs={6} justify="center">
              <Flex align={"center"}>
                <img src={"/icons/qad.png"} alt="QAD" width="80" height="80" />
                <Text weight={"semibold"} span size={"$lg"}>
                  QAD
                </Text>
              </Flex>
            </Grid>
            <Grid sm={4} xs={6} justify="center">
              <Flex align={"center"}>
                <img
                  src={"/icons/warrane.png"}
                  alt="Warrane"
                  width="45"
                  height="45"
                />
                &nbsp;&nbsp;
                <Text weight={"semibold"} span size={"$lg"}>
                  Warrane UNSW
                </Text>
              </Flex>
            </Grid>
            <Grid sm={4} xs={6} justify="center">
              <Flex align={"center"}>
                <img
                  src={`/icons/${brightIcon}`}
                  alt="Bright"
                  width="45"
                  height="45"
                />
                &nbsp;&nbsp;
                <Text weight={"semibold"} span size={"$lg"}>
                  Bright
                </Text>
              </Flex>
            </Grid>
            <Grid sm={4} xs={6} justify="center">
              <Flex align={"center"}>
                <img
                  src={"/icons/csesoc.jpeg"}
                  alt="CSESoc"
                  width="40"
                  height="40"
                />
                &nbsp;&nbsp;
                <Text weight={"semibold"} span size={"$lg"}>
                  CSESoc UNSW
                </Text>
              </Flex>
            </Grid>
          </Grid.Container>
        ) : (
          <Grid.Container
            gap={6}
            css={{
              width: "100%",
              "@sm": {
                width: "100%",
              },
              "&  span": {
                whiteSpace: "pre",
              },
            }}
          >
            <Grid sm={4} xs={6} justify="center">
              <Flex align={"center"} justify={"center"}>
                <img
                  src={"/icons/volvo.svg"}
                  alt="Volvo"
                  width="45"
                  height="45"
                />
                &nbsp;&nbsp;
                <Text weight={"semibold"} span size={"$lg"}>
                  Volvo Cars
                </Text>
              </Flex>
            </Grid>
            <Grid sm={4} xs={6} justify="center">
              <Flex align={"center"}>
                <img
                  src={"/icons/warrane.png"}
                  alt="Warrane"
                  width="45"
                  height="45"
                />
                &nbsp;&nbsp;
                <Text weight={"semibold"} span size={"$lg"}>
                  Warrane UNSW
                </Text>
              </Flex>
            </Grid>
            <Grid sm={4} xs={6} justify="center">
              <Flex align={"center"}>
                <img
                  src={"/icons/csesoc.jpeg"}
                  alt="CSESoc"
                  width="40"
                  height="40"
                />
                &nbsp;&nbsp;
                <Text weight={"semibold"} span size={"$lg"}>
                  CSESoc UNSW
                </Text>
              </Flex>
            </Grid>
            <Grid sm={4} xs={6} justify="center">
              <Flex align={"center"}>
                <img src={"/icons/ibm.png"} alt="IBM" width="80" height="80" />
                &nbsp;
                <Text weight={"semibold"} span size={"$lg"}>
                  IBM
                </Text>
              </Flex>
            </Grid>
            <Grid sm={4} xs={6} justify="center">
              <Flex align={"center"}>
                <img src={"/icons/qad.png"} alt="QAD" width="80" height="80" />
                <Text weight={"semibold"} span size={"$lg"}>
                  QAD
                </Text>
              </Flex>
            </Grid>
            <Grid sm={4} xs={6} justify="center">
              <Flex align={"center"}>
                <img
                  src={`/icons/${brightIcon}`}
                  alt="Bright"
                  width="45"
                  height="45"
                />
                &nbsp;&nbsp;
                <Text weight={"semibold"} span size={"$lg"}>
                  Bright
                </Text>
              </Flex>
            </Grid>
          </Grid.Container>
        )}
      </Flex>
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
