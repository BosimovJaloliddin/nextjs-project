import React from "react";
import { Container } from "./style";

const InfoTitle = (props) => {
  const { children } = props;
  return <Container {...props}>{children}</Container>;
};

export default InfoTitle;
