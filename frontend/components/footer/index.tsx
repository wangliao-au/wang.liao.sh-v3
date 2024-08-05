import { Instagram, LinkedIn } from "@mui/icons-material";
import { Divider, Text } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Flex
      css={{
        pt: "$20",
        pb: "$5",
        px: "$6",
      }}
    >
      <Box as={"footer"} css={{ width: "100%" }}>
        <Flex
          justify={"center"}
          wrap={"wrap"}
          align={"center"}
          css={{
            gap: "$10",
            "&  ul": {
              margin: 0,
            },
            "@sm": {},
          }}
        >
          <Flex
            css={{ gap: "$5", w: "250px" }}
            direction={"column"}
            align={"center"}
          >
            <a onClick={scrollToTop}>
              <img
                src="icons/wang.png"
                alt="logo"
                width="200px"
                height="100px"
              />
            </a>
            <Box
              as={"ul"}
              css={{ gap: "$5", listStyle: "none", textAlign: "center" }}
            ></Box>
          </Flex>
          <Flex
            css={{ gap: "$5", w: "250px" }}
            direction={"column"}
            align={"center"}
          >
            <Text h5>Services</Text>
            <Box
              as={"ul"}
              css={{ gap: "$5", listStyle: "none", textAlign: "center" }}
            >
              <Box as={"li"}>
                <Text
                  h6
                  css={{
                    color: "$accents8",
                    textDecoration: "none", // Start with no underline
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline", // Apply underline on hover
                    },
                  }}
                >
                  <Link href="/support">Support</Link>
                </Text>
              </Box>
              <Box as={"li"}>
                <Text
                  h6
                  css={{
                    color: "$accents8",
                    textDecoration: "none", // Start with no underline
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline", // Apply underline on hover
                    },
                  }}
                >
                  <Link href="/pricing">Pricing</Link>
                </Text>
              </Box>
            </Box>
          </Flex>
          <Flex
            css={{ gap: "$5", w: "250px" }}
            direction={"column"}
            align={"center"}
          >
            <Text h5>About Me</Text>
            <Box
              as={"ul"}
              css={{ gap: "$5", listStyle: "none", textAlign: "center" }}
            >
              <Box as={"li"}>
                <Text
                  h6
                  css={{
                    color: "$accents8",
                    textDecoration: "none", // Start with no underline
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline", // Apply underline on hover
                    },
                  }}
                  onClick={() =>
                    window.open("https://www.unsw.edu.au/homepage/", "_blank")
                  }
                >
                  Education
                </Text>
              </Box>
              <Box as={"li"}>
                <Text
                  h6
                  css={{
                    color: "$accents8",
                    textDecoration: "none", // Start with no underline
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline", // Apply underline on hover
                    },
                  }}
                  onClick={() =>
                    window.open("https://www.9degrees.com.au/", "_blank")
                  }
                >
                  Interests
                </Text>
              </Box>
            </Box>
          </Flex>
          <Flex
            css={{ gap: "$5", w: "250px" }}
            direction={"column"}
            align={"center"}
          >
            <Text h5>Contact</Text>
            <Box
              as={"ul"}
              css={{ gap: "$5", listStyle: "none", textAlign: "center" }}
            >
              <Box as={"li"}>
                <Text
                  h6
                  css={{
                    textDecoration: "none", // Start with no underline
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/wangliao-au/",
                      "_blank",
                    )
                  }
                >
                  <LinkedIn />
                </Text>
              </Box>
              <Box as={"li"}>
                <Text
                  h6
                  css={{
                    textDecoration: "none", // Start with no underline
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    window.open("https://www.instagram.com/1tsleon/", "_blank")
                  }
                >
                  <Instagram />
                </Text>
              </Box>
            </Box>
          </Flex>

          {/* <Flex
            css={{ gap: "$5", w: "250px" }}
            direction={"column"}
            align={"center"}
          >
            <Text h5>Legal</Text>
            <Box
              as={"ul"}
              css={{ gap: "$5", listStyle: "none", textAlign: "center" }}
            >
              <Box as={"li"}>
                <Text
                  h6
                  css={{
                    color: "$accents8",
                    textDecoration: "none", // Start with no underline
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline", // Apply underline on hover
                    },
                  }}
                >
                  Terms of Service
                </Text>
              </Box>
              <Box as={"li"}>
                <Text
                  h6
                  css={{
                    color: "$accents8",
                    textDecoration: "none", // Start with no underline
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline", // Apply underline on hover
                    },
                  }}
                >
                  Privacy Policy
                </Text>
              </Box>
            </Box>
          </Flex> */}
        </Flex>
        <Box
          css={{
            px: "$10",
            "@md": {
              px: "$56",
            },
          }}
        >
          <Divider
            css={{
              mt: "$14",
              display: "flex",
              justifyContent: "center",
            }}
          />
          <Flex
            //   justify={'between'}
            align={"center"}
            wrap={"wrap"}
            css={{
              pt: "$8",
              gap: "$10",
              justifyContent: "center",
              "@md": {
                justifyContent: "center",
              },
            }}
          >
            <Flex
              css={{
                gap: "$6",
              }}
            >
              <Text h6>CC BY-NC-SA 4.0 © 2023-2024 LIAO, Wang</Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
