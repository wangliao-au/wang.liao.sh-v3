import { Collapse, Divider, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { Flex } from "../styles/flex";

const faqData = [
  {
    question: "What is included in the Basic plan?",
    answer:
      "The Basic plan includes a fully-responsive static website, 1 team member, 1 custom domain email, 30+ GB storage, and 1 production server.",
  },
  {
    question: "Can I upgrade from the Basic plan to the Standard plan?",
    answer:
      "Yes, you can upgrade your plan from Basic to Standard at any time. Simply contact our support team for assistance.",
  },
  {
    question: "What storage options are available with the Standard plan?",
    answer:
      "The Standard plan offers 200+ GB of storage for your dynamic website content, images, and media files.",
  },
  {
    question: "How many production servers are provided in the Premium plan?",
    answer:
      "The Premium plan includes 3 production servers to ensure high availability and performance for your commercial website.",
  },
];

export const Faq = () => {
  return (
    <>
      <Flex
        css={{
          py: "$20",
          gap: "$18",
          px: "$6",
          mt: "$20",
        }}
        direction={"column"}
      >
        <Flex align={"center"} direction={"column"}>
          <Text span css={{ color: "$primary" }}>
            FAQ
          </Text>
          <Text h2>You Have Questions? We Have Answers!</Text>
          <Text
            span
            css={{
              maxWidth: "700px",
              color: "$accents8",
              textAlign: "center",
            }}
          >
            Whether you're considering our Basic, Standard, or Premium plans,
            we're here to provide the information you need to make an informed
            decision.
          </Text>
        </Flex>
        <Flex
          css={{
            gap: "$10",
            flexWrap: "wrap", // Add this to wrap items if needed
            "@lg": {
              px: "$64",
            },
          }}
          direction={"column"}
        >
          <Collapse.Group accordion={true} shadow bordered>
            {faqData.map((faq, index) => (
              <Collapse key={index} title={faq.question}>
                <Flex css={{ gap: "$5" }} justify={"start"}>
                  <BoxIcon />
                  <Flex direction={"column"} css={{ gap: "$3" }}>
                    <Text
                      span
                      css={{
                        color: "$accents8",
                      }}
                    >
                      {faq.answer}
                    </Text>
                  </Flex>
                </Flex>
              </Collapse>
            ))}
          </Collapse.Group>
        </Flex>
      </Flex>
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0" }}
      />
    </>
  );
};
