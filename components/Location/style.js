import styled from "styled-components";

import arrow from "@/assets/icons/ArrowLeft.svg";
import star from "@/assets/icons/locationStar.svg";

export const Background = styled.section`
  background-color: #f8f8f8;
`;
export const Container = styled.div`
  padding-top: 120px;
  padding-bottom: 110px;
`;
export const Wrapper = styled.div`
  display: ${({ df }) => df && df};
  align-items: ${({ al }) => al && al};
  justify-content: ${({ jc }) => jc && jc};
  gap: ${({ gap }) => gap && `${gap}px`};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  overflow: hidden;
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
`;
export const SliderBox = styled.div`
  position: relative;
  min-width: 32%;
  max-width: 32%;
  height: 500px;
  border: 6px solid #ffffff;
  border-radius: 10px;
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
`;
export const Star = styled(star)`
  margin-left: 3px;
`;
