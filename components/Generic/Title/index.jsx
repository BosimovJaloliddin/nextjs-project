import React from "react";
import { Container } from "./style";

const Title = (props) => {
  const { children } = props;
  return <Container {...props}>{children}</Container>;
};

export default Title;
