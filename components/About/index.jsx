import React from "react";
import Image from "next/image";
import InfoTitle from "../Generic/InfoTitle";
import Subtitle from "../Generic/Subtitle";
import Title from "../Generic/Title";
import {
  Box,
  BoxSubtitle,
  BoxTitle,
  BoxWrapper,
  Container,
  HeadImg,
  Section,
  Wrapper,
} from "./style";

import img from "../../assets/imgs/about.png";

export const About = () => {
  return (
    <Container>
      <Wrapper className="container">
        <Section>
          <InfoTitle mb={15}>Book Now</InfoTitle>
          <Title mb={20}>Let’s Enjoy Your Trip with TripGoal</Title>
          <Subtitle mb={45}>
            Thinking of taking a break from every day's busy life? Planning to
            go out of the country with your loved ones to have some fun and
            quality time in a cost-effective way?
          </Subtitle>
          <BoxWrapper>
            <Box>
              <BoxTitle>10M+</BoxTitle>
              <BoxSubtitle>Visitors</BoxSubtitle>
            </Box>
            <Box>
              <BoxTitle>109</BoxTitle>
              <BoxSubtitle>Hotels</BoxSubtitle>
            </Box>
          </BoxWrapper>
          <BoxWrapper>
            <Box>
              <BoxTitle>29</BoxTitle>
              <BoxSubtitle>Food Shop</BoxSubtitle>
            </Box>
            <Box>
              <BoxTitle>18</BoxTitle>
              <BoxSubtitle>18 Related Spots</BoxSubtitle>
            </Box>
          </BoxWrapper>
        </Section>
        <Section>
          <Image className="about-img" src={img} width={500} alt="about" />
        </Section>
      </Wrapper>
    </Container>
  );
};

export default About;
