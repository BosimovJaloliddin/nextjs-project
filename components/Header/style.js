import styled from "styled-components";

export const Container = styled.header`
  background-color: #f8f8f8;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 140px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 100px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    padding-bottom: 80px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    padding-bottom: 60px;
  }
`;
export const Section = styled.div`
  flex: 1;
  position: relative;

  @media (max-width: 1200px) {
    .head-img {
      width: 400px;
      height: 440px;
    }
  }
  @media (max-width: 768px) {
    .head-img {
      width: 70vw;
      height: 100%;
      margin-bottom: 60px;
    }
    text-align: center;
  }
`;
export const HeadImg = styled.img``;
