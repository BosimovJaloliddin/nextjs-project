import React from "react";
import {
  Contacts,
  Container,
  FooterInfo,
  Icon,
  Logo,
  MenuItem,
  MenuItems,
  Register,
  Wrapper,
} from "./style";
import Link from "next/link";

const Footer = () => {
  return (
    <Container className="container">
      <Wrapper>
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
        <Contacts>
          <Link target="_blanck" href="https://www.facebook.com/">
            <Icon.Facebook />
          </Link>
          <Link target="_blanck" href="https://www.instagram.com/">
            <Icon.Instagram />
          </Link>
          <Link target="_blanck" href="https://www.telegram.com/">
            <Icon.Telegram />
          </Link>
        </Contacts>
      </Wrapper>
      <hr />
      <FooterInfo> © 2021. All copyrights reserved by RH Agency</FooterInfo>
    </Container>
  );
};

export default Footer;
