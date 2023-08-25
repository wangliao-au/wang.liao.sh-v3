import { Button, Divider, Text } from "@nextui-org/react";
import React from "react";
import { Flex } from "../styles/flex";

export const Testimonials = () => {
  return (
    <>
      <Flex
        direction={"column"}
        css={{
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          px: "$6",
          pt: "$16",
          pb: "$12",
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
        {/* <Flex direction="column" css={{gap: '1.5rem'}}>
               <Card>
                  <Card.Body css={{background: '$accents2'}}>
                     <Flex
                        css={{
                           py: '$10',
                           gap: '$5',
                        }}
                     >
                        <QuotesIcon />
                        <Flex direction={'column'} css={{gap: '0.5rem'}}>
                           <Text
                              span
                              css={{
                                 maxWidth: '400px',
                                 color: '$accents8',
                              }}
                           >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              nisl nisl aliquet nisl,
                           </Text>
                           <Text
                              span
                              weight={'bold'}
                              css={{
                                 maxWidth: '400px',
                                 display: 'contents',
                                 color: '$accents9',
                              }}
                           >
                              Jennifer Ford{' '}
                           </Text>
                           <Text
                              span
                              css={{
                                 display: 'contents',
                                 color: '$accents8',
                              }}
                           >
                              - CEO at Company
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>

               <Card>
                  <Card.Body css={{background: '$accents2'}}>
                     <Flex
                        css={{
                           py: '$10',
                           gap: '$5',
                        }}
                     >
                        <QuotesIcon />
                        <Flex direction={'column'} css={{gap: '0.5rem'}}>
                           <Text
                              span
                              css={{
                                 maxWidth: '400px',
                                 color: '$accents8',
                              }}
                           >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              nisl nisl aliquet nisl,
                           </Text>
                           <Text
                              span
                              weight={'bold'}
                              css={{
                                 maxWidth: '400px',
                                 display: 'contents',
                                 color: '$accents9',
                              }}
                           >
                              Jennifer Ford{' '}
                           </Text>
                           <Text
                              span
                              css={{
                                 display: 'contents',
                                 color: '$accents8',
                              }}
                           >
                              - CEO at Company
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>

               <Card>
                  <Card.Body css={{background: '$accents2'}}>
                     <Flex
                        css={{
                           py: '$10',
                           gap: '$5',
                        }}
                     >
                        <QuotesIcon />
                        <Flex direction={'column'} css={{gap: '0.5rem'}}>
                           <Text
                              span
                              css={{
                                 maxWidth: '400px',
                                 color: '$accents8',
                              }}
                           >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              nisl nisl aliquet nisl,
                           </Text>
                           <Text
                              span
                              weight={'bold'}
                              css={{
                                 maxWidth: '400px',
                                 display: 'contents',
                                 color: '$accents9',
                              }}
                           >
                              Jennifer Ford{' '}
                           </Text>
                           <Text
                              span
                              css={{
                                 display: 'contents',
                                 color: '$accents8',
                              }}
                           >
                              - CEO at Company
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex> */}
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
            platform that empower organizations to create, manage, sell tickets,
            and track statistics. It also provides a seamless experience for
            users to discover and purchase tickets to events.
          </Text>
          <Button
            color="gradient"
            shadow
            onClick={() => window.open("https://eventstar-app.liao.sh/")}
            css={{ mt: "$8" }}
          >
            View Project
          </Button>
        </Flex>
        <Flex>
          <img
            src={"/eventstar.svg"}
            alt="event-star"
            width={600}
            height={400}
          />
        </Flex>
      </Flex>
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
