import {
  Button,
  Dropdown,
  Link,
  Navbar,
  Switch,
  Text,
} from "@nextui-org/react";
import React from "react";
import { ModalLogin } from "../modal";
import { icons } from "./icons";
import { AcmeLogo } from "./logo";
import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";
import { GithubIcon } from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";

export const Nav = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const collapseItems = ["Projects", "About", "Pricing", "Contact", "Support"];
  return (
    <Navbar
      variant="sticky"
      // shouldHideOnScroll
      isBordered
      // css={{
      //   overflow: "hidden",
      //   "& .nextui-navbar-container": {
      //     background: "$background",
      //     borderBottom: "none",
      //   },
      // }}
    >
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
        <AcmeLogo />
        <Text b color="inherit" hideIn="xs">
          wang.liao.sh
        </Text>
        <Navbar.Content
          hideIn="sm"
          css={{
            pl: "6rem",
          }}
        >
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                iconRight={icons.chevron}
                ripple={false}
              >
                Projects
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME Projects"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  svg: {
                    color: "$secondary",
                    mr: "$4",
                  },
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
                key="autoscaling"
                showFullDescription
                description="A cloud-based event management platform empowering organizers & users to manage and book events."
                icon={icons.scale}
              >
                EventStar
              </Dropdown.Item>
              <Dropdown.Item
                key="usage_metrics"
                showFullDescription
                description="A Kahoot!-like application for users to create and play quizzes."
                icon={icons.activity}
              >
                BigBrain
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                showFullDescription
                description="An improved version of when2meet.com for users to schedule meetings."
                icon={icons.flash}
              >
                Waves
              </Dropdown.Item>
              <Dropdown.Item
                key="99_uptime"
                showFullDescription
                description="A chatbot that can generate responses based on prompts using GPT-3.0 API."
                icon={icons.server}
              >
                ChatGPT-Clone
              </Dropdown.Item>
              <Dropdown.Item
                key="supreme_support"
                showFullDescription
                description="A online chatting platform for students to connect with each other."
                icon={icons.user}
              >
                DodoStream
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link isActive href="#">
            Contact
          </Navbar.Link>
          <Navbar.Link href="#">Support</Navbar.Link>
        </Navbar.Content>
      </Navbar.Brand>

      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item} isActive={index === 3}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
        <Navbar.CollapseItem>
          <Link
            color="inherit"
            css={{
              marginTop: "0.1rem",
              minWidth: "100%",
            }}
            target="_blank"
            href="https://github.com/wangliao-au"
          >
            <GithubIcon />
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link
            color="inherit"
            css={{
              marginTop: "0.2rem",
              marginLeft: "0.1rem",
              minWidth: "100%",
            }}
            target="_blank"
            href="https://www.linkedin.com/in/wangliao-au/"
          >
            <LinkedInIcon />
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem
          css={{
            marginTop: "0.4rem",
          }}
        >
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </Navbar.CollapseItem>
      </Navbar.Collapse>
      <Navbar.Content>
        <ModalLogin />
        <Navbar.Item>
          <Button auto flat href="#">
            Sign Up
          </Button>
        </Navbar.Item>
        <Navbar.Item hideIn={"xs"}>
          <Link
            color="inherit"
            css={{
              minWidth: "100%",
            }}
            target="_blank"
            href="https://github.com/wangliao-au"
          >
            <GithubIcon />
          </Link>
        </Navbar.Item>
        <Navbar.Item hideIn={"xs"}>
          <Link
            color="inherit"
            css={{
              minWidth: "100%",
            }}
            target="_blank"
            href="https://www.linkedin.com/in/wangliao-au/"
          >
            <LinkedInIcon />
          </Link>
        </Navbar.Item>
        <Navbar.Item hideIn={"xs"}>
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};
