import React from "react";
import { Box, BoxSubtitle, BoxTitle, Container, Icon, Wrapper } from "./style";
import InfoTitle from "../Generic/InfoTitle";
import Title from "../Generic/Title";
import Subtitle from "../Generic/Subtitle";

const TrevelPerfection = () => {
  return (
    <Container className="container">
      <InfoTitle textA="center" mb={10}>
        3 steps for the perfect trip
      </InfoTitle>
      <Title textA="center" mb={20}>
        Find travel perfection
      </Title>
      <Subtitle textA="center" mb={70}>
        Naturally head of the class whenit comes to luxury travel
        planning,bbecause <br /> we do more homework than anyone else
      </Subtitle>
      <Wrapper>
        <Box>
          <Icon.Chat />
          <BoxTitle>Tell us what you want to do</BoxTitle>
          <BoxSubtitle>
            Fill out a 2-minute questionnaire about how you like to travel
          </BoxSubtitle>
        </Box>
        <Box>
          <Icon.Calendar />
          <BoxTitle>Share your travel preference</BoxTitle>
          <BoxSubtitle>
            It all happends online,We recommend everything to your vision{" "}
          </BoxSubtitle>
        </Box>
        <Box>
          <Icon.Star />
          <BoxTitle>We’ll give you recommendations</BoxTitle>
          <BoxSubtitle>
            Once you’re happy with your final plan, We handle everything for you{" "}
          </BoxSubtitle>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default TrevelPerfection;
