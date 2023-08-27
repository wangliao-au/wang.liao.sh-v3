import React, { useContext, useEffect, useState } from "react";
import { Modal, Input, Button, Text, Navbar, Loading } from "@nextui-org/react";
import { notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";
import apiRequest from "../../utils/api";
import { Context } from "../../pages/_app";
import Face2Icon from "@mui/icons-material/Face2";

type ModalProps = {
  isSupport?: boolean;
};

export const ModalLogin = ({ isSupport }: ModalProps) => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const [api, contextHolder] = notification.useNotification();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getters, setters } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);

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

  const closeHandler = () => {
    setVisible(false);
  };

  const sendHandler = async () => {
    setIsLoading(true);
    const response = await apiRequest("POST", "/api/auth/login", {
      email: email,
      password: password,
    });
    if (response.status === 200) {
      setters.setIsAuth(true);
      localStorage.setItem("token", response.token);
    }
    setVisible(false);
    openNotification("topRight", response.message);
    setEmail("");
    setPassword("");
    setIsLoading(false);
  };

  return (
    <>
      {contextHolder}
      <div>
        {isSupport ? (
          <Button shadow onClick={handler} color="gradient" css={{ zIndex: 0 }}>
            Login
          </Button>
        ) : (
          <Button auto shadow onClick={handler} color="gradient">
            Login
          </Button>
        )}
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
          {isLoading ? (
            <>
              <Modal.Body
                css={{ py: "$14", px: "$16" }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Loading type="gradient" />
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </>
          ) : (
            <>
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
            </>
          )}
        </Modal>
      </div>
    </>
  );
};

export const ModalSignUp = ({ isSupport }: ModalProps) => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const [api, contextHolder] = notification.useNotification();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const closeHandler = () => {
    setVisible(false);
  };

  const sendHandler = async () => {
    setIsLoading(true);
    const response = await apiRequest("POST", "/api/auth/signup", {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
    setVisible(false);
    openNotification("topRight", response.message);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setIsLoading(false);
  };

  return (
    <>
      {contextHolder}
      <div>
        {isSupport ? (
          <Button
            ghost
            shadow
            onClick={handler}
            color="gradient"
            css={{ zIndex: 0 }}
          >
            Sign Up
          </Button>
        ) : (
          <Button auto ghost shadow onClick={handler} color="gradient">
            Sign Up
          </Button>
        )}
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
          {isLoading ? (
            <>
              <Modal.Body
                css={{ py: "$14", px: "$16" }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Loading type="gradient" />
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </>
          ) : (
            <>
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
            </>
          )}
        </Modal>
      </div>
    </>
  );
};
