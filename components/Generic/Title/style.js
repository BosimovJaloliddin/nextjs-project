import styled from "styled-components";

export const Container = styled.h1`
  font-family: "Noto Serif Display", sans-serif;
  font-size: ${({ fs }) => (fs ? `${fs}px` : "48px")};
  font-weight: ${({ fw }) => (fw ? `${fw}px` : 800)};
  text-align: ${({ textA }) => textA && textA};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  margin-bottom: ${({ mt }) => mt && `${mt}px`};
  line-height: 60px;
  color: #002248;
`;
