import { Divider, Grid, Text } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { AcmeLogo } from "../navbar/logo";
import { Flex } from "../styles/flex";

export const Trusted = () => {
   const { theme } = useTheme();
   const [brightIcon, setBrightIcon] = useState('');

   useEffect(() => {
      const newIcon = theme === 'light' ? 'bright-light.png' : 'bright-dark.png';
      setBrightIcon(newIcon);
    }, [theme]);

   console.log(theme, brightIcon);
  return (
    <>
      <Flex
        direction={"column"}
        align={"center"}
        css={{
          px: "$6",
          pt: "$20",
          pb: "$10",
          "@md": {
            px: "$64",
          },
        }}
      >
        <Text h2 css={{ textAlign: "center" }}>
          I'm proud to have worked with <Text span css={{ color: "$primary" }}>6+</Text> companies and organizations
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
          I've experienced with a variety of environments and teams, from startups to
          Fortune 500 companies.
        </Text>
        <Grid.Container
          gap={6}
          alignItems="center"
          justify="center"
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
            <img src={"/icons/volvo.svg"} alt="Volvo" width="45" height="45" />&nbsp;&nbsp;
              <Text weight={"semibold"} span size={"$lg"}>
                Volvo Cars
              </Text>
            </Flex>
          </Grid>
          <Grid sm={4} xs={6} justify="center">
            <Flex align={"center"}>
            <img src={"/icons/ibm.png"} alt="IBM" width="80" height="80" />&nbsp;
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
            <img src={"/icons/warrane.png"} alt="Warrane" width="45" height="45" />&nbsp;&nbsp;
              <Text weight={"semibold"} span size={"$lg"}>
                Warrane College
              </Text>
            </Flex>
          </Grid>
          <Grid sm={4} xs={6} justify="center">
            <Flex align={"center"}>
            <img src={"/icons/csesoc.jpeg"} alt="CSESoc" width="40" height="40" />&nbsp;&nbsp;
              <Text weight={"semibold"} span size={"$lg"}>
                UNSW CSESoc
              </Text>
            </Flex>
          </Grid>
          <Grid sm={4} xs={6} justify="center">
            <Flex align={"center"}>
            <img src={`/icons/${brightIcon}`} alt="Bright" width="45" height="45" />&nbsp;&nbsp;
              <Text weight={"semibold"} span size={"$lg"}>
                Bright Engineering
              </Text>
            </Flex>
          </Grid>
        </Grid.Container>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
