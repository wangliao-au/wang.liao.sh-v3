import { Collapse, Divider, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../../icons/BoxIcon";
import { Flex } from "../../styles/flex";

const faqData = [
  {
    question: "How can I contact customer support?",
    answer:
      "Got questions? We're here to help! Reach out via email, live chat, or phone – whatever suits your style.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely! We've fortified our platform with top-notch encryption to ensure your data stays safe from prying eyes.",
  },
  {
    question: "Can I change my subscription plan?",
    answer:
      "Flexibility is key! Upgrade or downgrade your subscription at any time through your account settings.",
  },
  {
    question: "Do you offer a mobile app?",
    answer:
      "Stay connected on the go! Our mobile app is available for iOS and Android devices, making account access a breeze.",
  },
  {
    question: "How do I add team members?",
    answer:
      "Collaboration made easy. Invite team members via email within your account settings, and watch your workspace expand.",
  },
  {
    question: "What if I exceed my storage limit?",
    answer:
      "No need to stress! If you max out your storage, upgrading is a snap. Get in touch with our support team for guidance.",
  },
];

export const Faq = () => {
  return (
    <>
      <Flex
        css={{
          pb: "$20",
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
            Explore ready solutions to common queries.
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
