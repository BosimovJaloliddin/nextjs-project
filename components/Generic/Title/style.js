import styled from "styled-components";

export const Container = styled.h1`
  font-family: "Noto Serif Display", sans-serif;
  font-size: ${({ fs }) => (fs ? `${fs}px` : "48px")};
  font-weight: ${({ fw }) => (fw ? `${fw}px` : 800)};
  text-align: ${({ textA }) => textA && textA};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  margin-bottom: ${({ mt }) => mt && `${mt}px`};
  text-transform: capitalize;
  line-height: 60px;
  color: #002248;

  @media (max-width: 1200px) {
    font-size: ${({ fs }) => (fs ? `${fs * (9 / 10)}px` : "48px")};
  }
  @media (max-width: 768px) {
    font-size: ${({ fs }) => (fs ? `${fs * (8 / 10)}px` : "40px")};
    line-height: 50px;
  }
  @media (max-width: 480px) {
    font-size: ${({ fs }) => (fs ? `${fs * (7 / 10)}px` : "32px")};
    line-height: 40px;
  }
  @media (max-width: 320px) {
    font-size: ${({ fs }) => (fs ? `${fs * (7 / 10)}px` : "30px")};
    line-height: 38px;
  }
`;
