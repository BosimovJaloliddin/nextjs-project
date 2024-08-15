import styled from "styled-components";

export const Container = styled.section`
  margin-top: 40px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f3f8ff;
  padding: 20px 10px 0 70px;
  border-radius: 30px;

  @media (max-width: 768px) {
    padding: 20px 10px 20px 40px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 20px 10px 0 40px;
  }
`;
export const Section = styled.div`
  flex: 1;

  @media (max-width: 1200px) {
    .contact-img {
      width: 96%;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    .contact-img {
      width: 80%;
      height: auto;
    }
  }
  @media (max-width: 480px) {
    text-align: center;
    .contact-img {
      width: 100%;
      margin-top: 40px;
    }
  }
`;
