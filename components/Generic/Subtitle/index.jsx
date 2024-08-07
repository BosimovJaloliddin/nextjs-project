import React from "react";
import { Container } from "./style";

const Subtitle = (props) => {
  const { children } = props;
  return <Container {...props}>{children}</Container>;
};

export default Subtitle;
