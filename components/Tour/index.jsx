import React from "react";
import Image from "next/image";
import { Container, Icon, ImgWrapper, InfoWrapper, Section } from "./style";

import img from "@/assets/imgs/tour1.png";
import InfoTitle from "../Generic/InfoTitle";
import Title from "../Generic/Title";
import Subtitle from "../Generic/Subtitle";
import GenericButton from "../Generic/Button";

const Tour = () => {
  return (
    <Container>
      <ImgWrapper>
        <Image src={img} fill={true} objectFit="cover" alt="tour" />
      </ImgWrapper>
      <Section>
        <InfoWrapper>
          <InfoTitle mb={10}>Take a Tour</InfoTitle>
          <Title fs={40} mb={20}>
            Discover Our Travel Guideline
          </Title>
          <Subtitle mb={40}>
            For curious travelers who want to connect locally and go deeper into
            a place. Our Experiential Travel Guides highlight offbeat and local
            experiences that help you.
          </Subtitle>
          <GenericButton>Start Now</GenericButton>
        </InfoWrapper>
        <Icon.MapSvg />
      </Section>
    </Container>
  );
};

export default Tour;
