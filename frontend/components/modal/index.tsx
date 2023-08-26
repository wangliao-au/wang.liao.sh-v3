import React from "react";
import { Modal, Input, Button, Text, Navbar } from "@nextui-org/react";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import type { NotificationPlacement } from "antd/es/notification/interface";

export const ModalLogin = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const [api, contextHolder] = notification.useNotification();

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
    console.log("closed");
  };

  const sendHandler = () => {
    openNotification("topRight", "Welcome back!");
    setVisible(false);
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
              type="test"
              label="Username"
              placeholder="Enter your username"
              css={{ px: "$12" }}
            />
            <Input.Password
              bordered
              clearable
              type="password"
              label="Password"
              placeholder="Enter your password"
              css={{ px: "$12", mt: "$4" }}
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
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const [api, contextHolder] = notification.useNotification();

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
    console.log("closed");
  };

  const sendHandler = () => {
    openNotification("topRight", "Welcome to the club!");
    setVisible(false);
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
              bordered
              clearable
              type="test"
              label="Username"
              placeholder="Enter your username"
              css={{ px: "$12" }}
            />
            <Input.Password
              bordered
              clearable
              type="password"
              label="Password"
              placeholder="Enter your password"
              css={{ px: "$12", mt: "$4" }}
            />
            <Input.Password
              bordered
              clearable
              type="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm your password"
              css={{ px: "$12", mt: "$4" }}
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
