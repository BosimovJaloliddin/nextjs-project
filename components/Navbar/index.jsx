import React from "react";
import {
  Container,
  Logo,
  MenuItem,
  MenuItems,
  Register,
  Wrapper,
} from "./style";

const Navbar = () => {
  return (
    <Container>
      <Wrapper className="container">
        <Logo>
          <span className="logo-trip">Trip</span>
          <span className="logo-goal">Goal</span>
        </Logo>
        <MenuItems>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Packages</MenuItem>
          <MenuItem>Contact Us</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuItems>
        <Register>Register</Register>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
