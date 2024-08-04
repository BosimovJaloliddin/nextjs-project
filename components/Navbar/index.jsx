import React from "react";
import {
  Container,
  Logo,
  MenuItem,
  MenuItems,
  Register,
  Wrapper,
} from "./style";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <Wrapper className="container">
        <Logo>
          <span className="logo-trip">Trip</span>
          <span className="logo-goal">Goal</span>
        </Logo>
        <MenuItems>
          <MenuItem>
            <Link href="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/about">About</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/packages">Packages</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/contact">Contact Us</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/faq">FAQ</Link>
          </MenuItem>
        </MenuItems>
        <Register>
          <Link href="/register">Registe</Link>
        </Register>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
