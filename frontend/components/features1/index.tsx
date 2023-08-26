import { Divider, Text } from "@nextui-org/react";
import React from "react";
import HtmlIcon from '@mui/icons-material/Html';
import TerminalIcon from '@mui/icons-material/Terminal';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import BugReportIcon from '@mui/icons-material/BugReport';
import { Flex } from "../styles/flex";
import styles from './photo.module.css'

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
            Get to know me better&nbsp;!
          </Text>
          <Text h3>
            I enjoy seeing my uni knowledge come alive in industry projects
          </Text>
          <Text
            h5
            css={{
              maxWidth: "400px",
              color: "$accents8",
            }}
          >
            I've dived into Frontend, Backend, Cloud, QA, and Data Analytics
            during my degree. This variety paints a clear picture of SDLC and
            how to team up effectively.
          </Text>
          <Flex
            css={{
              py: "$6",
              gap: "$5",
            }}
          >
            <HtmlIcon fontSize="large" />
            <Flex direction={"column"}>
              <Text h4 weight={"semibold"}>
                Frontend
              </Text>
              <Text
                span
                css={{
                  maxWidth: "400px",
                }}
              >
                TypeScript, JavaScript, HTML, CSS, React, Next.js, TailwindCSS,
                Material UI, NextUI Beta, Ant Design.
              </Text>
            </Flex>
          </Flex>
          <Flex
            css={{
              py: "$6",
              gap: "$5",
            }}
          >
            <TerminalIcon fontSize="large"/>
            <Flex direction={"column"}>
              <Text h4 weight={"semibold"}>
                Backend
              </Text>
              <Text
                span
                css={{
                  maxWidth: "400px",
                }}
              >
                Node.js, Python, Java, Express, FastAPI, MongoDB, Firebase,
                MySQL, PostgreSQL, REST API.
              </Text>
            </Flex>
          </Flex>
          <Flex
            css={{
              py: "$6",
              gap: "$5",
            }}
          >
            <CloudDoneIcon fontSize="large"/>
            <Flex direction={"column"}>
              <Text h4 weight={"semibold"}>
                Cloud
              </Text>
              <Text
                span
                css={{
                  maxWidth: "400px",
                }}
              >
                AWS, Azure, GCP, Docker, Bitbucket CI/CD, GitHub Actions, Shell
                Scripting, Linux, Apache, Nginx.
              </Text>
            </Flex>
          </Flex>
          <Flex
            css={{
              py: "$6",
              gap: "$5",
            }}
          >
            <BugReportIcon fontSize="large"/>
            <Flex direction={"column"}>
              <Text h4 weight={"semibold"}>
                QA
              </Text>
              <Text
                span
                css={{
                  maxWidth: "400px",
                }}
              >
                Selenium, Appium, BDD, TDD, Robot Framework, Cucumber, Cypress,
                Jest, JUnit, Pytest, Postman.
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex align={"center"}>
        <div className={styles['custom-image-container']}>
      <img src="/wangliao.jpeg" alt="wangliao" width="300px" />
    </div>
        </Flex>
      </Flex>
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$16" }}
      />
    </>
  );
};
