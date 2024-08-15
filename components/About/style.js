import styled from "styled-components";

export const Container = styled.section`
  /* background-color: #f8f8f8; */
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  padding-top: 120px;
  padding-bottom: 120px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  @media (max-width: 480px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media (max-width: 320px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;
export const Section = styled.div`
  flex: 1;
  position: relative;

  @media (max-width: 1200px) {
    .about-img {
      width: 400px;
      height: 440px;
    }
  }
  @media (max-width: 768px) {
    .about-img {
      width: 70vw;
      height: 100%;
      margin-bottom: 60px;
    }
    text-align: center;
  }
  @media (max-width: 480px) {
    .about-img {
      width: 80vw;
    }
  }
`;
export const BoxWrapper = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  gap: 13px;
  margin-bottom: 26px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 150px;
  height: 130px;
  border-radius: 10px;
  border: 2px solid #f8f8f8;
  padding: 32px 36px;
`;
export const BoxTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 34px;
  text-align: center;
  color: var(--primary-color);
`;
export const BoxSubtitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  color: var(--primary-text-color);
`;
