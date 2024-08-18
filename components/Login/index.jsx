import React, { useState } from "react";
import { Container, Input, Label, Wrapper } from "./style";
import GenericButton from "../Generic/Button";
import { useRouter } from "next/router";
import Title from "../Generic/Title";

const Login = () => {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const [inputControl, setControl] = useState({
    login: false,
    password: false,
  });

  const getData = ({ target: { id, value } }) => {
    setData({ ...data, [id]: value });
  };

  const onController = (type) => {
    if (type === "login" && !data.name.length) {
      setControl({ ...inputControl, login: true });
    } else if (type === "password" && !data.password.length) {
      setControl({ ...inputControl, password: true });
    }
    if (type === "login" && data.name.length) {
      setControl({ ...inputControl, login: false });
    } else if (type === "password" && data.password.length) {
      setControl({ ...inputControl, password: false });
    }
  };
  const onLogin = () => {
    if (data.name.length && data.password.length) {
      router.push("/");
    }
    if (!data.name.length) {
      setControl({ ...inputControl, login: true });
    } else if (!data.password.length) {
      setControl({ ...inputControl, password: true });
    }
  };
  return (
    <Container className="container">
      <Title fs={36}>Log In</Title>
      <Wrapper>
        <Label for="name">Login</Label>
        <Input
          onBlur={() => onController("login")}
          onChange={getData}
          id="name"
          placeholder="Login"
          style={{
            border: `1px solid ${
              inputControl.login ? "red" : "var(--primary-text-color)"
            }`,
          }}
        />
      </Wrapper>
      <Wrapper>
        <Label for="password">Password</Label>
        <Input
          onChange={getData}
          onBlur={() => onController("password")}
          id="password"
          placeholder="Password"
          style={{
            border: `1px solid ${
              inputControl.password ? "red" : "var(--primary-text-color)"
            }`,
          }}
        />
      </Wrapper>
      <GenericButton onClick={onLogin}>Log In</GenericButton>
    </Container>
  );
};

export default Login;
