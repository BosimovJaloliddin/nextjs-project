import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 70vh;
  /* margin: 40px 140px; */
  /* box-shadow: 0 0 1px var(--secondary-text-color); */
  /* border-radius: 10px; */
  /* border: 1px solid var(--secondary-text-color); */
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  color: var(--primary-text-color);

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
export const Input = styled.input`
  max-width: 500px;
  min-width: 500px;
  height: 40px;
  padding: 4px 12px;
  border-radius: 7px;
  border: 1px solid var(--primary-text-color);
  outline: none;

  @media (max-width: 768px) {
    min-width: 400px;
  }
  @media (max-width: 480px) {
    min-width: 250px;
    height: 30px;
  }
`;
