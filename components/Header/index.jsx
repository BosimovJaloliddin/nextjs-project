import React from "react";
import InfoTitle from "../Generic/InfoTitle";
import Subtitle from "../Generic/Subtitle";
import GenericButton from "../Generic/Button";
import Title from "../Generic/Title";
import { Container, HeadImg, Section, Wrapper } from "./style";

import img from "../../assets/imgs/head.png";
import Image from "next/image";

const Header = () => {
  return (
    <Container>
      <Wrapper className="container">
        <Section>
          <Image src={img} width={420} height={480} alt="header-1" />
        </Section>
        <Section>
          <InfoTitle mb={15}>Book Now</InfoTitle>
          <Title mb={20}>Let’s Enjoy Your Trip with TripGoal</Title>
          <Subtitle mb={49}>
            Thinking of taking a break from every day's busy life? Planning to
            go out of the country with your loved ones to have some fun and
            quality time in a cost-effective way?
          </Subtitle>
          <GenericButton>Start Now</GenericButton>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Header;
