import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import ResponsiveHeader from "./responsiveHeader";
import DropDownLink from "./reusable/dropDownLink";
import styled from "styled-components";

const Header = () => {
  const ref = useRef(null);
  const [showSkipLink, setShowSkipLink] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [links] = useState([
    { title: "Projects", link: "/projects" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ]);

  const [servicesLinks] = useState([
    { title: "Domestic", link: "/services" },
    { title: "Commercial", link: "/services" },
    { title: "Mining", link: "/services" },
  ]);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setBurgerOpen(false);
    }
  };

  const handleBurgerClick = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <Container>
      <SkipHeaderLink
        href="#main"
        onFocus={() => setShowSkipLink(true)}
        onBlur={() => setShowSkipLink(false)}
        showSkipLink={showSkipLink}
      >
        Skip to Content
      </SkipHeaderLink>
      <Link href="/" passHref>
        <Logo>
          <Title>Kalgoorlie Precast</Title>
          <SmallTitle>Concrete</SmallTitle>
        </Logo>
      </Link>

      <LinksContainer>
        <DropDownLink
          title="Services"
          href="/services"
          links={servicesLinks}
          padding="10px 20px 9px 45px"
        />
        {links.map((link, index) => (
          <Link key={index} href={link.link} passHref>
            <LinkTitle>{link.title}</LinkTitle>
          </Link>
        ))}
      </LinksContainer>

      <ResponsiveHeader
        burgerOpen={burgerOpen}
        links={links}
        ref={ref}
        handleBurgerClick={handleBurgerClick}
      />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  height: 100px;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
`;

const SkipHeaderLink = styled.a`
  padding: 16px 24px;
  position: absolute;
  top: 116px;
  left: 62px;
  font-family: ${({ theme }) => theme.semiBold};
  font-size: 1rem;
  border-radius: 9px;
  opacity: ${({ showSkipLink }) => (showSkipLink ? 1 : 0)};
  height: ${({ showSkipLink }) => (showSkipLink ? "auto" : "0px")};
  width: ${({ showSkipLink }) => (showSkipLink ? "auto" : "0px")};
  clip: ${({ showSkipLink }) =>
    showSkipLink ? "auto" : "rect(1px, 1px, 1px, 1px)"};
  background-color: white;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  &:focus {
    outline: initial solid initial;
  }
`;

const Logo = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 70px;
  white-space: nowrap;
  margin-right: 70px;
  font-family: ${({ theme }) => theme.semiBold};
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.span`
  font-size: 2rem;
  position: relative;
  color: white;
`;

const SmallTitle = styled.span`
  font-size: 1.3rem;
  position: absolute;
  bottom: 0px;
  color: white;
`;

const LinksContainer = styled.div`
  margin-left: auto;
  margin-right: 70px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  @media (max-width: 936px) {
    display: none;
  }
`;

const LinkTitle = styled.a`
  position: relative;
  font-weight: 900;
  font-weight: 700;
  margin-right: 7px;
  padding: 10px 20px 9px 45px;
  color: ${({ theme }) => theme.white};
  font-size: 1.17rem;
  font-family: ${({ theme }) => theme.semiBold};
  transition: all 0.3s;
  position: relative;
`;
