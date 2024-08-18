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
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  transition: all 0.2s ease;
  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 1200px) {
    width: ${({ w }) => (w ? `${w}px` : "150px")};
    height: ${({ h }) => (h ? `${h}px` : "55px")};
    font-size: ${({ fs }) => (fs ? `${fs / (9 / 10)}px` : "16px")};
  }
  @media (max-width: 768px) {
    width: ${({ w }) => (w ? `${w}px` : "140px")};
    height: ${({ h }) => (h ? `${h}px` : "45px")};
    font-size: ${({ fs }) => (fs ? `${fs / (8 / 10)}px` : "14px")};
  }
  @media (max-width: 480px) {
    width: ${({ w }) => (w ? `${w}px` : "120px")};
    height: ${({ h }) => (h ? `${h}px` : "40px")};
    font-size: ${({ fs }) => (fs ? `${fs / (7 / 10)}px` : "12px")};
  }
  @media (max-width: 320px) {
    width: ${({ w }) => (w ? `${w}px` : "100px")};
    height: ${({ h }) => (h ? `${h}px` : "35px")};
    font-size: ${({ fs }) => (fs ? `${fs / (7 / 10)}px` : "12px")};
  }
`;
