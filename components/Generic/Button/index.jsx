import React from "react";
import { Container } from "./style";

const GenericButton = (props) => {
  const { children } = props;
  return <Container {...props}>{children}</Container>;
};

export default GenericButton;
