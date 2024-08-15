import styled from "styled-components";

import arrow from "@/assets/icons/ArrowLeft.svg";
import star from "@/assets/icons/locationStar.svg";

export const Background = styled.section`
  background-color: #f8f8f8;
`;
export const Container = styled.div`
  padding-top: 120px;
  padding-bottom: 110px;

  @media (max-width: 1200px) {
    padding: 100px;
    padding-bottom: 100px;
  }
  @media (max-width: 768px) {
    padding: 80px;
    padding-bottom: 80px;
  }
  @media (max-width: 480px) {
    padding: 60px;
    padding-bottom: 60px;
  }
  @media (max-width: 320px) {
    padding: 40px;
    padding-bottom: 40px;
  }
`;
export const Wrapper = styled.div`
  display: ${({ bottom, df }) => (bottom ? "none" : df)};
  align-items: ${({ al }) => al && al};
  justify-content: ${({ jc }) => jc && jc};
  gap: ${({ gap }) => gap && `${gap}px`};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  overflow: hidden;

  @media (max-width: 768px) {
    display: ${({ top, df }) => (top === "top" ? "none" : df)};
    margin-bottom: ${({ mb }) => mb && `${mb * (4 / 10)}px`};
  }
`;
export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2%;
  user-select: none;
  -webkit-user-select: none;
  transition: all 0.4s linear;
  transform: ${({ size }) => (size ? `translate(-${size * 34}%)` : 0)};

  @media (max-width: 480px) {
    transform: ${({ size }) => (size ? `translate(-${size * 51}%)` : 0)};
  }
  @media (max-width: 320px) {
    transform: ${({ size }) => (size ? `translate(-${size * 100}%)` : 0)};
    gap: 0;
  }
`;
export const SliderBox = styled.div`
  position: relative;
  min-width: 32%;
  max-width: 32%;
  height: 500px;
  border: 6px solid #ffffff;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 300px;
  }
  @media (max-width: 480px) {
    min-width: 49%;
    max-width: 49%;
  }
  @media (max-width: 320px) {
    min-width: 100%;
    max-width: 100%;
  }
`;
export const Card = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  left: 20px;
  padding: 23px 16px;
  color: #ffffff;
  background-color: #0022489d;
  border-radius: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
`;
export const CardContent = styled.div`
  font-family: ${({ ff }) => (ff ? "Noto Serif Display" : "Inter")};
  font-size: ${({ fs }) => (fs ? `${fs}px` : "14px")};
  font-weight: ${({ fw }) => (fw ? fw : 500)};

  line-height: 20px;
`;

// ICONS
export const Icon = styled(arrow)`
  width: 50px;
  height: 50px;
  padding: 17px;
  background-color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  transform: ${({ position }) => position === "right" && "rotate(180deg)"};

  &:hover {
    background-color: var(--primary-color);
    path {
      fill: #ffffff;
    }
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    padding: 14px;
  }
  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    padding: 10px;
  }
`;
export const Star = styled(star)`
  margin-left: 3px;
`;
