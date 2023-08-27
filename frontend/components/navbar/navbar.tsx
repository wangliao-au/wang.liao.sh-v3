import {
  Button,
  Dropdown,
  FormElement,
  Input,
  Link,
  Loading,
  Modal,
  Navbar,
  Switch,
  Text,
  Textarea,
} from "@nextui-org/react";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { ModalLogin, ModalSignUp } from "../modal";
import { icons } from "./icons";
import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";
import { GithubIcon } from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import { notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";
import apiRequest from "../../utils/api";
import { Context } from "../../pages/_app";
import Face2Icon from "@mui/icons-material/Face2";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import confetti from "canvas-confetti";

export const Nav = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const collapseItems = ["Projects", "About", "Pricing", "Contact", "Support"];
  const [email, setEmail] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const { getters, setters } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const tokenValidation = async () => {
      const response = await apiRequest("GET", "/api/auth/tokenValidation");
      if (response.status === 200) {
        setters.setIsVerified(true);
        openNotification("topRight", "Welcome back!", response.email);
      } else {
        setters.setIsVerified(false);
      }
    };
    tokenValidation();
  }, [getters.isAuth]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setters.setIsAuth(false);
    openNotification("topRight", "Successfully logged out.");
  };

  const openNotification = (
    placement: NotificationPlacement,
    msg: string,
    description?: string
  ) => {
    api.info({
      duration: 3.5,
      message: msg,
      description: description,
      icon: <Face2Icon />,
    });
  };

  const openModalHandler = () => {
    setModalOpen(true);
  };
  const closeModalHandler = () => {
    setModalOpen(false);
  };

  const sendHandler = async () => {
    setIsLoading(true);
    const response = await apiRequest("POST", "/api/contact/send", {
      email: email,
      message: messageText,
    });
    if (response.status == 200) {
      setModalOpen(false);
      openNotification(
        "topRight",
        "Thank you for your message!",
        "I will get back to you as soon as possible."
      );
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } else {
      openNotification(
        "topRight",
        response.message,
        "Please try again later."
      );
    }
    setIsLoading(false);
  };

  const handleChange = (e: ChangeEvent<FormElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

  return (
    <>
      {contextHolder}
      <Navbar
        variant="sticky"
        shouldHideOnScroll
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
          <Link href="/">
            <img src="icons/wang.png" alt="logo" width="150px" height="80px" />
          </Link>
          {/* <Link href="/" color="text">
            <Text b color="inherit" hideIn="xs">
              wang.liao.sh
            </Text>
          </Link> */}
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
                onAction={(key) => {
                  switch (key) {
                    case "event_star":
                      window.open("https://eventstar-app.liao.sh/");
                      break;
                    case "big_brain":
                      window.open("https://github.com/wangliao-au/bigbrain");
                      break;
                    case "waves":
                      window.open("https://github.com/wangliao-au/waves");
                      break;
                    case "chat_gpt":
                      window.open(
                        "https://github.com/wangliao-au/chatGPT-clone"
                      );
                      break;
                    case "dodo_stream":
                      window.open("https://github.com/wangliao-au/dodo");
                      break;
                    default:
                      break;
                  }
                }}
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
                  key="event_star"
                  showFullDescription
                  description="A cloud-based event management platform empowering organizers & users to manage and book events."
                  icon={icons.scale}
                >
                  EventStar
                </Dropdown.Item>
                <Dropdown.Item
                  key="big_brain"
                  showFullDescription
                  description="A Kahoot!-like application for users to create and play quizzes."
                  icon={icons.activity}
                >
                  BigBrain
                </Dropdown.Item>
                <Dropdown.Item
                  key="waves"
                  showFullDescription
                  description="An improved version of when2meet.com for users to schedule meetings."
                  icon={icons.flash}
                >
                  Waves
                </Dropdown.Item>
                <Dropdown.Item
                  key="chat_gpt"
                  showFullDescription
                  description="A chatbot that can generate responses based on prompts using GPT-3.0 API."
                  icon={icons.server}
                >
                  ChatGPT-Clone
                </Dropdown.Item>
                <Dropdown.Item
                  key="dodo_stream"
                  showFullDescription
                  description="A online chatting platform for students to connect with each other."
                  icon={icons.user}
                >
                  DodoStream
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Navbar.Link isActive onClick={openModalHandler}>
              Contact
            </Navbar.Link>
            <Navbar.Link href="/about">About</Navbar.Link>
            <Navbar.Link href="/pricing">Pricing</Navbar.Link>
            <Modal
              closeButton
              aria-labelledby="modal-title"
              open={modalOpen}
              onClose={closeModalHandler}
            >
              <Modal.Header>
                <Text id="modal-title" size={18}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    Thanks for reaching out.{" "}
                  </div>
                </Text>
              </Modal.Header>
              {isLoading ? (
                <>
                  <Modal.Body css={{ py: "$14" }}>
                    <Loading type="gradient" />
                  </Modal.Body>
                  <Modal.Footer></Modal.Footer>
                </>
              ) : (
                <>
                  <Modal.Body css={{ pt: "$8", pb: "$14" }}>
                    <Input
                      autoFocus
                      css={{ pb: "$12" }}
                      bordered
                      clearable
                      placeholder="Enter your email"
                      onChange={handleChange}
                      labelLeft="email"
                    />
                    <Textarea
                      labelPlaceholder="Enter your message here..."
                      status="default"
                      rows={14}
                      bordered
                      onChange={(e) => setMessageText(e.target.value)}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      auto
                      ghost
                      color="error"
                      onPress={closeModalHandler}
                      css={{ zIndex: 0 }}
                    >
                      Close
                    </Button>
                    <Button
                      auto
                      color="primary"
                      onPress={sendHandler}
                      css={{ zIndex: 0 }}
                    >
                      Send
                    </Button>
                  </Modal.Footer>
                </>
              )}
            </Modal>
            <Navbar.Link href="/support">Support</Navbar.Link>
          </Navbar.Content>
        </Navbar.Brand>

        <Navbar.Collapse css={{ zIndex: 50 }}>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item} isActive={index === 3}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={
                  index === 0
                    ? "https://www.linkedin.com/in/wangliao-au/"
                    : `/${item.toLowerCase()}`
                }
                target={index === 0 ? "_blank" : ""}
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
              icon={<Brightness6Icon />}
              shadow
              color="primary"
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            />
          </Navbar.CollapseItem>
        </Navbar.Collapse>
        <Navbar.Content>
          {getters.isVerified ? (
            <>
              <Button auto flat onClick={handleLogout} css={{ zIndex: 0 }}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <ModalLogin />
              <ModalSignUp />
            </>
          )}
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
              icon={<Brightness6Icon />}
              shadow
              color="primary"
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </>
  );
};
