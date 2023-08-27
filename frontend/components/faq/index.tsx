import { Collapse, Divider, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { Flex } from "../styles/flex";

const faqData = [
  {
    question: "Can I upgrade from the Basic plan to the Standard plan?",
    answer:
      "Yes, you can upgrade your plan from Basic to Standard at any time. Simply contact our support team for assistance.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "We do not offer a free trial at this time, but we do offer a 30-day money-back guarantee. If you purchase a plan and find that it isn't right for you, simply contact our support team within 30 days of purchase for a full refund.",
  },
  {
    question: "Do you offer a discount for yearly subscriptions?",
    answer:
      "Yes, we offer a 20% discount if you choose annual billing for any plan. This discount is applicable for the lifetime of the subscription.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription at the end of any billing cycle. If you choose to cancel, your subscription will expire at the end of the billing cycle and you will not be charged for the following month.",
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
          <Text h2 css={{ textAlign: "center", "@sm": { textAlign: "start" } }}>You Have Questions? We Have Answers!</Text>
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
              <Collapse key={index} title={<Text h4> {faq.question}</Text>}>
                <Flex css={{ gap: "$5" }} justify={"start"}>
                  <BoxIcon />
                  <Flex direction={"column"} css={{ gap: "$3" }}>
                    <Text
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
      <Divider css={{ position: "absolute", inset: "0p", left: "0" }} />
    </>
  );
};
