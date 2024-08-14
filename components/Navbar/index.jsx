import React from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Container,
  Logo,
  MenuItem,
  MenuItems,
  Register,
  Wrapper,
} from "./style";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const getRoute = (pageName) => {
    return Boolean(pathname === pageName);
  };
  return (
    <Container>
      <Wrapper className="container">
        <Logo>
          <span className="logo-trip">Trip</span>
          <span className="logo-goal">Goal</span>
        </Logo>
        <MenuItems>
          <MenuItem>
            <Link
              href="/"
              style={{ color: getRoute("/") && "var(--primary-color)" }}
            >
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/about"
              style={{ color: getRoute("/about") && "var(--primary-color)" }}
            >
              About
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/packages"
              style={{ color: getRoute("/packages") && "var(--primary-color)" }}
            >
              Packages
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/contact"
              style={{ color: getRoute("/contact") && "var(--primary-color)" }}
            >
              Contact Us
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/faq"
              style={{ color: getRoute("/faq") && "var(--primary-color)" }}
            >
              FAQ
            </Link>
          </MenuItem>
        </MenuItems>
        <Register onClick={() => router.push("/register")}>Registe</Register>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
