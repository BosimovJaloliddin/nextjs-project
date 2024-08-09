import React, { useState } from "react";
import Image from "next/image";
import Title from "../Generic/Title";
import InfoTitle from "../Generic/InfoTitle";
import Subtitle from "../Generic/Subtitle";
import {
  Background,
  Card,
  CardBox,
  CardContent,
  Container,
  Icon,
  SliderBox,
  SliderWrapper,
  Star,
  Wrapper,
} from "./style";

import img1 from "@/assets/imgs/location-1.png";
import img2 from "@/assets/imgs/location-2.png";
import img3 from "@/assets/imgs/location-3.png";

const Location = () => {
  const [size, setSize] = useState(0);

  const onController = (prop) => {
    if (prop === "right" && size < 4) {
      setSize(size + 1);
    } else if (prop === "left" && size > 0) {
      setSize(size - 1);
    }
  };
  return (
    <Background>
      <Container className="container">
        <InfoTitle mb={10}> Location</InfoTitle>
        <Title fs={40} mb={10}>
          Suggested Location
        </Title>
        <Wrapper df="flex" al="center" jc="space-between" mb={71}>
          <Subtitle>
            Travel is my life. Since 1999, I’ve been traveling around the world
            nonstop. <br /> If you also love travel, you’re in the right place!
          </Subtitle>
          <Wrapper df="flex" al="center" gap={24}>
            <Icon onClick={() => onController("left")} />
            <Icon onClick={() => onController("right")} position="right" />
          </Wrapper>
        </Wrapper>

        <Wrapper>
          <SliderWrapper size={size}>
            <SliderBox>
              <Image
                src={img1}
                objectFit="cover"
                fill={true}
                alt="location-banner"
                style={{
                  borderRadius: "10px",
                }}
              />
              <Card>
                <CardBox mb={7}>
                  <CardContent ff="true" fs={20} fw={600}>
                    Bali Handara Gate
                  </CardContent>
                  <CardContent>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </CardContent>
                </CardBox>
                <CardBox>
                  <CardContent>Indonesia</CardContent>
                  <CardContent fs={20}>$1200</CardContent>
                </CardBox>
              </Card>
            </SliderBox>
            <SliderBox>
              <Image
                src={img2}
                objectFit="cover"
                fill={true}
                alt="location-banner"
                style={{
                  borderRadius: "10px",
                }}
              />
              <Card>
                <CardBox mb={7}>
                  <CardContent ff="true" fs={20} fw={600}>
                    Buddhist shrine
                  </CardContent>
                  <CardContent>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </CardContent>
                </CardBox>
                <CardBox>
                  <CardContent>Tokyo, Japon</CardContent>
                  <CardContent fs={20}>$1200</CardContent>
                </CardBox>
              </Card>
            </SliderBox>
            <SliderBox>
              <Image
                src={img3}
                objectFit="cover"
                fill={true}
                alt="location-banner"
                style={{
                  borderRadius: "10px",
                }}
              />
              <Card>
                <CardBox mb={7}>
                  <CardContent ff="true" fs={20} fw={600}>
                    Bali Handara Gate
                  </CardContent>
                  <CardContent>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </CardContent>
                </CardBox>
                <CardBox>
                  <CardContent>Indonesia</CardContent>
                  <CardContent fs={20}>$1200</CardContent>
                </CardBox>
              </Card>
            </SliderBox>
            <SliderBox>
              <Image
                src={img2}
                objectFit="cover"
                fill={true}
                alt="location-banner"
                style={{
                  borderRadius: "10px",
                }}
              />
              <Card>
                <CardBox mb={7}>
                  <CardContent ff="true" fs={20} fw={600}>
                    Buddhist shrine
                  </CardContent>
                  <CardContent>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </CardContent>
                </CardBox>
                <CardBox>
                  <CardContent>Tokyo, Japon</CardContent>
                  <CardContent fs={20}>$1200</CardContent>
                </CardBox>
              </Card>
            </SliderBox>
            <SliderBox>
              <Image
                src={img1}
                objectFit="cover"
                fill={true}
                alt="location-banner"
                style={{
                  borderRadius: "10px",
                }}
              />
              <Card>
                <CardBox mb={7}>
                  <CardContent ff="true" fs={20} fw={600}>
                    Bali Handara Gate
                  </CardContent>
                  <CardContent>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </CardContent>
                </CardBox>
                <CardBox>
                  <CardContent>Indonesia</CardContent>
                  <CardContent fs={20}>$1200</CardContent>
                </CardBox>
              </Card>
            </SliderBox>
            <SliderBox>
              <Image
                src={img3}
                objectFit="cover"
                fill={true}
                alt="location-banner"
                style={{
                  borderRadius: "10px",
                }}
              />
              <Card>
                <CardBox mb={7}>
                  <CardContent ff="true" fs={20} fw={600}>
                    Bali Handara Gate
                  </CardContent>
                  <CardContent>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </CardContent>
                </CardBox>
                <CardBox>
                  <CardContent>Indonesia</CardContent>
                  <CardContent fs={20}>$1200</CardContent>
                </CardBox>
              </Card>
            </SliderBox>
            <SliderBox>
              <Image
                src={img1}
                objectFit="cover"
                fill={true}
                alt="location-banner"
                style={{
                  borderRadius: "10px",
                }}
              />
              <Card>
                <CardBox mb={7}>
                  <CardContent ff="true" fs={20} fw={600}>
                    Bali Handara Gate
                  </CardContent>
                  <CardContent>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </CardContent>
                </CardBox>
                <CardBox>
                  <CardContent>Indonesia</CardContent>
                  <CardContent fs={20}>$1200</CardContent>
                </CardBox>
              </Card>
            </SliderBox>
          </SliderWrapper>
        </Wrapper>
      </Container>
    </Background>
  );
};

export default Location;
