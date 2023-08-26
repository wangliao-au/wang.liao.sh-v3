import { Button, Card, Divider, Grid, Link, Text } from "@nextui-org/react";
import React from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Plans = () => {
  return (
    <>
      <Flex
        css={{ mt: "$10", gap: "1rem" }}
        justify={"center"}
        wrap={"wrap"}
        direction={"column"}
        align={"center"}
      >
        <Flex direction={"column"} align={"center"}>
          <Text span css={{ color: "$primary" }}>
            Pricing
          </Text>
          <Text h2>Choose the plan that fits you</Text>
        </Flex>
        <Flex
          css={{ gap: "2rem", width: "100%" }}
          wrap={"wrap"}
          justify={"center"}
        >
          <Card css={{ p: "$5", mw: "350px" }} isHoverable>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Basic
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>
                    Perfect for small websites and blogs.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$4" }}>
              <Text css={{ display: "contents" }} h2>
                $79+{" "}
              </Text>
              <Text css={{ display: "contents", color: "$accents8" }}>/mo</Text>
              <Button
                color="gradient"
                shadow
                rounded
                css={{ mt: "$7", mb: "$12" }}
              >
                Get Started
              </Button>

              <Divider />
              <Box as={"ul"}>
                <Flex css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    1 Team Members
                  </Text>
                </Flex>
                <Flex css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    1 Static Website
                  </Text>
                </Flex>
                <Flex css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    1 Custom Domain Email
                  </Text>
                </Flex>
                <Flex css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    30+ GB Storage
                  </Text>
                </Flex>
                <Flex css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    1 Production Server
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: "$5", mw: "350px" }} isHoverable>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Premium
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>
                    Great for small businesses websites.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$4" }}>
              <Text css={{ display: "contents" }} h2>
                $249+{" "}
              </Text>
              <Text css={{ display: "contents", color: "$accents8" }}>/mo</Text>
              <Button
                color="gradient"
                shadow
                rounded
                css={{ mt: "$7", mb: "$12" }}
              >
                Get Started
              </Button>

              <Divider />
              <Box as={"ul"}>
                <Flex css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    2 Team Members
                  </Text>
                </Flex>
                <Flex css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    1 Dynamic Website
                  </Text>
                </Flex>
                <Flex css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    3+ Custom Domain Email
                  </Text>
                </Flex>
                <Flex css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    200+ GB Storage
                  </Text>
                </Flex>
                <Flex css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    1 Production Server
                  </Text>
                </Flex>

                <Flex css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    1 Development Server
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: "$5", mw: "350px" }} isHoverable>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Enterprise
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>
                    For multimedia commercial websites.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$4" }}>
              <Text css={{ display: "contents" }} h2>
                $1099+{" "}
              </Text>
              <Text css={{ display: "contents", color: "$accents8" }}>/mo</Text>
              <Button
                color="gradient"
                shadow
                rounded
                css={{ mt: "$7", mb: "$12" }}
              >
                Get Started
              </Button>

              <Divider />
              <Box as={"ul"}>
                <Flex css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    3 Team Members
                  </Text>
                </Flex>
                <Flex css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    1 Commercial Website
                  </Text>
                </Flex>
                <Flex css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    8+ Custom Domain Email
                  </Text>
                </Flex>
                <Flex css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    1+ TB Storage
                  </Text>
                </Flex>
                <Flex css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    3 Production Servers
                  </Text>
                </Flex>
                <Flex css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    2 Development Server
                  </Text>
                </Flex>
                <Flex css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <CheckIcon />
                  <Text span css={{ color: "$accents8" }}>
                    1 Staging Server
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
        </Flex>
      </Flex>

      <Divider
        css={{ position: 'absolute', inset: '0p', left: '0', mt: '$20' }}
      />
    </>
  );
};
