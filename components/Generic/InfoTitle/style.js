import styled from "styled-components";

export const Container = styled.h5`
  font-size: ${({ fs }) => (fs ? `${fs}px` : "16px")};
  font-weight: ${({ fw }) => (fw ? `${fw}px` : 500)};
  text-align: ${({ textA }) => textA && textA};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  margin-bottom: ${({ mt }) => mt && `${mt}px`};
  line-height: 18px;
  color: #00b3a0;

  @media (max-width: 1200px) {
    font-size: ${({ fs }) => (fs ? `${fs / (9 / 10)}px` : "16px")};
  }
  @media (max-width: 768px) {
    font-size: ${({ fs }) => (fs ? `${fs / (8 / 10)}px` : "14px")};
  }
  @media (max-width: 320px) {
    font-size: ${({ fs }) => (fs ? `${fs / (7 / 10)}px` : "12px")};
  }
`;
