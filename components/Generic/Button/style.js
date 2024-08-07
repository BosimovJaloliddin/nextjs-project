import styled from "styled-components";

export const Container = styled.button`
  width: ${({ w }) => (w ? `${w}px` : "170px")};
  height: ${({ h }) => (h ? `${h}px` : "60px")};
  font-size: ${({ fs }) => (fs ? `${fs}px` : "16px")};
  font-weight: ${({ fw }) => (fw ? `${fw}px` : 700)};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  margin-bottom: ${({ mt }) => mt && `${mt}px`};
  line-height: 20px;
  text-align: center;
  background-color: var(--primary-color);
  color: var(--white-color);
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:active {
    transform: scale(0.98);
  }
`;
