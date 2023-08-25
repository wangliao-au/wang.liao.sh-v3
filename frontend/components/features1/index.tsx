import { Divider, Grid, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { FeatureIcon } from "../icons/FeatureIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Features1 = () => {
  return (
    <>
      <Flex
        direction={"column"}
        css={{
          gap: "1rem",
          pt: "$20",
          justifyContent: "center",
          alignItems: "center",
          px: "$6",
          "@sm": {
            justifyContent: "space-around",
            px: "$32",
            flexDirection: "row",
          },
          "@md": {
            px: "$64",
          },
        }}
      >
        <Flex direction="column">
          <Text span css={{ color: "$primary" }}>
            Get to know me better
          </Text>
          <Text h3>
          I enjoy seeing my uni knowledge come alive in industry projects
          </Text>
          <Text
            span
            css={{
              maxWidth: "400px",
              color: "$accents8",
            }}
          >
          I've dived into Frontend, Backend, Cloud, QA, and Data Analytics during my degree. This variety paints a clear picture of SDLC and how to team up effectively.
          </Text>

          <Flex
            css={{
              py: "$6",
              gap: "$5",
            }}
          >
            <BoxIcon />
            <Flex direction={"column"}>
              <Text h4 weight={"medium"}>
                Frontend
              </Text>
              <Text
                span
                css={{
                  maxWidth: "400px",
                  color: "$accents8",
                }}
              >
                TypeScript, JavaScript, HTML, CSS, React, Next.js, TailwindCSS, Material UI, NextUI, Ant Design.
              </Text>
            </Flex>
          </Flex>
          <Flex
            css={{
              py: "$6",
              gap: "$5",
            }}
          >
            <BoxIcon />
            <Flex direction={"column"}>
              <Text h4 weight={"medium"}>
                Backend
              </Text>
              <Text
                span
                css={{
                  maxWidth: "400px",
                  color: "$accents8",
                }}
              >
                Node.js, Python, Java, Express, FastAPI, MongoDB, Firebase, MySQL, PostgreSQL, REST API.
              </Text>
            </Flex>
          </Flex>
          <Flex
            css={{
              py: "$6",
              gap: "$5",
            }}
          >
            <BoxIcon />
            <Flex direction={"column"}>
              <Text h4 weight={"medium"}>
                Cloud
              </Text>
              <Text
                span
                css={{
                  maxWidth: "400px",
                  color: "$accents8",
                }}
              >
                AWS, Azure, GCP, Docker, Bitbucket CI/CD, GitHub Actions, Shell Scripting, Linux, Apache, Nginx.
              </Text>
            </Flex>
          </Flex>
          <Flex
            css={{
              py: "$6",
              gap: "$5",
            }}
          >
            <BoxIcon />
            <Flex direction={"column"}>
              <Text h4 weight={"medium"}>
                QA
              </Text>
              <Text
                span
                css={{
                  maxWidth: "400px",
                  color: "$accents8",
                }}
              >
                Selenium, Appium, BDD, TDD, Robot Framework, Cucumber, Cypress, Jest, JUnit, Pytest, Postman.
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex align={"center"}>
          <FeatureIcon />
        </Flex>
      </Flex>
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
