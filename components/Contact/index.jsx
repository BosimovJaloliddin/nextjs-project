import React from "react";
import Image from "next/image";
import InfoTitle from "../Generic/InfoTitle";
import Title from "../Generic/Title";
import GenericButton from "../Generic/Button";
import { Container, Section, Wrapper } from "./style";

import img from "@/assets/imgs/contact.png";

const Contact = () => {
  return (
    <Container className="container">
      <Wrapper>
        <Section>
          <InfoTitle mb={10}>Contact Us</InfoTitle>
          <Title fs={40} mb={30}>
            Do You Have Any Questions?
          </Title>
          <GenericButton>Contact Us</GenericButton>
        </Section>
        <Section>
          <Image className="contact-img" src={img} alt="contact" />
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Contact;
