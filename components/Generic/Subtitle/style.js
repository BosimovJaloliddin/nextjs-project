import styled from "styled-components";

export const Container = styled.p`
  font-size: ${({ fs }) => (fs ? `${fs}px` : "16px")};
  font-weight: ${({ fw }) => (fw ? `${fw}px` : 400)};
  text-align: ${({ textA }) => textA && textA};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  margin-bottom: ${({ mt }) => mt && `${mt}px`};
  line-height: 28px;
  color: #697687;
`;
