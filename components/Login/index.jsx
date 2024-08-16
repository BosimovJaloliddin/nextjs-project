import React, { useState } from "react";
import { Container, Input, Label, Wrapper } from "./style";
import GenericButton from "../Generic/Button";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const getData = ({ target: { id, value } }) => {
    setData({ ...data, [id]: value });
  };

  const onLogin = () => {
    if (data.name.length && data.password.length) {
      router.push("/");
    }
  };
  return (
    <Container className="container">
      <Wrapper>
        <Label for="name">Login</Label>
        <Input onChange={getData} id="name" placeholder="Login" />
      </Wrapper>
      <Wrapper>
        <Label for="password">Password</Label>
        <Input onChange={getData} id="password" placeholder="Password" />
      </Wrapper>
      <GenericButton onClick={onLogin}>Log In</GenericButton>
    </Container>
  );
};

export default Login;
