import React from "react";
import { Modal, Input, Button, Text, Navbar } from "@nextui-org/react";

export const ModalLogin = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
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
        <Modal.Body>
          <Input
            bordered
            clearable
            type="test"
            label="Username"
            placeholder="Enter your username"
          />
          <Input.Password
            bordered
            clearable
            type="password"
            label="Password"
            placeholder="Enter your password"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto ghost color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const ModalSignUp = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
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
              Welcome, new user!
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            bordered
            clearable
            type="test"
            label="Username"
            placeholder="Enter your username"
          />
          <Input.Password
            bordered
            clearable
            type="password"
            label="Password"
            placeholder="Enter your password"
          />
          <Input.Password
            bordered
            clearable
            type="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm your password"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto ghost color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
