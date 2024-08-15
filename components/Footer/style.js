import styled from "styled-components";

import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import telegram from "@/assets/icons/telegram.svg";

export const Container = styled.footer`
  padding-top: 100px;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    padding-top: 60px;
  }
  @media (max-width: 480px) {
    padding-top: 40px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 25px;
`;
export const Logo = styled.div`
  .logo-trip {
    font-family: "Inter";
    font-size: 20px;
    font-weight: 800;
    color: var(--primary-color);
  }
  .logo-goal {
    font-family: "Inter";
    font-size: 20px;
    font-weight: 800;
    color: var(--primary-text-color);

    &::after {
      display: inline-block;
      margin-left: 5px;
      content: "";
      width: 8px;
      height: 8px;
      background-color: #00b3a0;
      border-radius: 50%;
    }
  }
  user-select: none;
  -webkit-user-select: none;
  cursor: context-menu;
`;
export const MenuItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 24px;
  list-style: none;

  @media (max-width: 480px) {
    display: none;
  }
`;
export const MenuItem = styled.li`
  a {
    position: relative;
    font-family: "inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    text-decoration: none;
    color: var(--primary-text-color);
    cursor: pointer;
    transition: all 0.1s ease;
    user-select: none;
    -webkit-user-select: none;

    &:hover {
      color: var(--primary-color);
    }
  }
`;
export const Contacts = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;
export const Icon = styled.div``;
Icon.Facebook = styled(facebook)`
  &:hover {
    & path {
      fill: var(--primary-color);
    }
  }
`;
Icon.Instagram = styled(instagram)`
  &:hover {
    & path {
      fill: var(--primary-color);
    }
  }
`;
Icon.Telegram = styled(telegram)`
  & path {
    fill: #697687;
  }
  &:hover {
    & path {
      fill: var(--primary-color);
    }
  }
`;

export const FooterInfo = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
  margin-top: 30px;
  color: #697687;
`;
