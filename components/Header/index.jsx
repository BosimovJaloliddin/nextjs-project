import React from "react";
import InfoTitle from "../Generic/InfoTitle";
import Subtitle from "../Generic/Subtitle";
import GenericButton from "../Generic/Button";
import Title from "../Generic/Title";
import { Container, HeadImg, Section, Wrapper } from "./style";

import img1 from "../../assets/imgs/head-1.png";
import img2 from "../../assets/imgs/head-2.png";
import Image from "next/image";

const Header = () => {
  return (
    <Container>
      <Wrapper className="container">
        <Section>
          <Image src={img1} width={320} height={440} alt="header-1" />
          <Image
            src={img2}
            width={240}
            height={330}
            style={{ position: "absolute", left: 190, top: 160 }}
            alt="header-2"
          />
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
