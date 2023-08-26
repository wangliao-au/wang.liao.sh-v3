import { Card, Divider, Text } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LandscapeIcon from "@mui/icons-material/Landscape";
import HikingIcon from "@mui/icons-material/Hiking";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export const Features3 = () => {
  return (
    <>
      <Box
        css={{
          px: "$6",
          pb: "$14",
        }}
      >
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          css={{
            pt: "$20",
          }}
        >
          <Text span css={{ color: "$primary" }}>
            Beside work and study&nbsp;?
          </Text>
          <Text h3>These are my hobbies, hope we share some!</Text>
          <Text
            span
            css={{
              maxWidth: "800px",
              color: "$accents8",
              textAlign: "center",
            }}
          >
            Beyond coding, I'm a gym rat, boulder ninja, trail tamer, and manga
            maniac!
          </Text>
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          wrap={"wrap"}
          css={{
            gap: "1rem",
            pt: "$14",
          }}
        >
          <Card css={{ mw: "500px", minHeight: "150px" }} isHoverable>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <FitnessCenterIcon />
                <Flex direction={"column"}>
                  <Text h4>Gym</Text>
                  <Text span>
                    I've clocked in 2 years of sweat and gains. I'm all about
                    hitting the gym, and pushing my limits.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
          <Card css={{ mw: "500px", minHeight: "150px" }} isHoverable>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <LandscapeIcon />
                <Flex direction={"column"}>
                  <Text h4>Bouldering</Text>
                  <Text span>
                    Catch me at 9-degree stadium, taking on gravity itself.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
        <Flex
          align={"center"}
          wrap={"wrap"}
          justify={"center"}
          css={{
            gap: "1rem",
            pt: "$8",
          }}
        >
          <Card css={{ mw: "500px", minHeight: "150px" }} isHoverable>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <HikingIcon />
                <Flex direction={"column"}>
                  <Text h4>Hiking</Text>
                  <Text span>
                    it's my escape from screens and my date with nature's
                    finest. Thrill? Uncharted paths and terrain that makes
                    my heart race.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
          <Card css={{ mw: "500px", minHeight: "150px" }} isHoverable>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <AutoStoriesIcon />
                <Flex direction={"column"}>
                  <Text h4>Manga</Text>
                  <Text span>
                    My initiation? The legendary Doraemon. My fav: Berserk,
                    JoJo, Toriko, One Piece, Monster, Baki Hanma ... – and yes,
                    Slam Dunk gets its epic slam dunk too. 📚🌟
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
      </Box>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
