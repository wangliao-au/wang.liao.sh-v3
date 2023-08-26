import React, { useContext, useEffect, useState } from "react";
import { Modal, Input, Button, Text, Navbar } from "@nextui-org/react";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import type { NotificationPlacement } from "antd/es/notification/interface";
import apiRequest from "../../utils/api";
import { Context } from "../../pages/_app";

export const ModalLogin = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const [api, contextHolder] = notification.useNotification();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {getters, setters} = useContext(Context);

  const openNotification = (
    placement: NotificationPlacement,
    msg: string,
    description?: string
  ) => {
    api.info({
      message: msg,
      description: description,
      icon: <SmileOutlined style={{ color: "#108ee9" }} rev />,
    });
  };

  const closeHandler = () => {
    setVisible(false);
  };

  const sendHandler = async () => {
    const response = await apiRequest("POST", "/api/auth/login", {
      email: email,
      password: password,
    });
    if (response.token !== undefined) localStorage.setItem("token", response.token);
    if (response.status === 200) {
      setters.setIsAuth(true);
      openNotification("topRight", response.message);
    } else {
      openNotification("topRight", response.message);
    }
    setVisible(false);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {contextHolder}
      <div>
        <Navbar.Link onClick={handler}>Login</Navbar.Link>
        <Modal
          closeButton
          blur
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              <Text b size={18}>
                Login to your account
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body css={{ mt: "$6" }}>
            <Input
              bordered
              clearable
              type="email"
              label="Email"
              placeholder="Enter your email"
              css={{ px: "$12" }}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <Input.Password
              bordered
              clearable
              type="password"
              label="Password"
              placeholder="Enter your password"
              css={{ px: "$12", mt: "$4" }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer css={{ mt: "$8" }}>
            <Button auto ghost color="error" onClick={closeHandler}>
              Close
            </Button>
            <Button auto onClick={sendHandler}>
              Sign in
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export const ModalSignUp = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const [api, contextHolder] = notification.useNotification();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const openNotification = (
    placement: NotificationPlacement,
    msg: string,
    description?: string
  ) => {
    api.info({
      message: msg,
      description: description,
      icon: <SmileOutlined style={{ color: "#108ee9" }} rev />,
    });
  };

  const closeHandler = () => {
    setVisible(false);
  };

  const sendHandler = async () => {
    const response = await apiRequest("POST", "/api/auth/signup", {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
    if (response.status === 200) {
      openNotification("topRight", response.message);
    } else {
      openNotification("topRight", response.message);
    }
    setVisible(false);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      {contextHolder}
      <div>
        <Button auto flat onClick={handler}>
          Sign Up
        </Button>
        <Modal
          closeButton
          blur
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              <Text b size={18}>
                Create your account
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body css={{ mt: "$6" }}>
            <Input
              autoFocus
              bordered
              clearable
              type="email"
              label="Email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              css={{ px: "$12" }}
            />
            <Input.Password
              bordered
              clearable
              type="password"
              label="Password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              css={{ px: "$12", mt: "$4" }}
            />
            <Input.Password
              bordered
              clearable
              type="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm your password"
              css={{ px: "$12", mt: "$4" }}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer css={{ mt: "$8" }}>
            <Button auto ghost color="error" onClick={closeHandler}>
              Close
            </Button>
            <Button auto onClick={sendHandler}>
              Sign up
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
