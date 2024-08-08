import styled from "styled-components";
import chat from "@/assets/icons/chat.svg";
import calendar from "@/assets/icons/calendar.svg";
import star from "@/assets/icons/star.svg";

export const Container = styled.div`
  margin-top: 120px;
  margin-bottom: 120px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
export const Box = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 12px;
  border: 2px solid #f8f8f8;
  border-radius: 10px;
  transition: all 0.2s linear;

  &:hover {
    box-shadow: 0 0 3px #002248;
  }
`;
export const BoxTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
  color: var(--primary-text-color);
`;
export const BoxSubtitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
  color: var(--secondary-text-color);
`;

export const Icon = styled.div``;
Icon.Chat = styled(chat)``;
Icon.Calendar = styled(calendar)``;
Icon.Star = styled(star)``;
