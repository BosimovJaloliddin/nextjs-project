import styled from "styled-components";

export const Container = styled.nav`
  background-color: #f8f8f8;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`;
export const Logo = styled.div`
  .logo-trip {
    font-family: "Inter";
    font-size: 26px;
    font-weight: 800;
    color: var(--primary-color);
  }
  .logo-goal {
    font-family: "Inter";
    font-size: 26px;
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
`;
export const MenuItem = styled.li`
  a {
    position: relative;
    font-family: "inter", sans-serif;
    font-size: 18px;
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
export const Register = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  text-decoration: none;
  color: var(--white-color);
  padding: 16px 29px;
  background-color: var(--primary-color);
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 2px var(--primary-color);
  }
  &:active {
    transform: scale(0.98);
  }
`;
