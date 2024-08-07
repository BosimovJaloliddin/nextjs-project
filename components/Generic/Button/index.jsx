import React from "react";
import { Container } from "./style";

const GenericButton = (props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default GenericButton;
