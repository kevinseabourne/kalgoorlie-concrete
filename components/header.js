import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import ResponsiveHeader from "./responsiveHeader";
import styled from "styled-components";
import Image from "next/image";

const Header = (props) => {
  const ref = useRef(null);
  const [showSkipLink, setShowSkipLink] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [links] = useState([
    { title: "Services", link: "/services" },
    { title: "Projects", link: "/projects" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ]);

  const [servicesLinks] = useState([
    { title: "Domestic", link: "/services" },
    { title: "Commercial", link: "/services" },
    { title: "Mining", link: "/services" },
  ]);

  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
        {links.map((link, index) => (
          <Link key={index} href={link.link} passHref>
            <LinkInnerContainer
              onMouseEnter={() =>
                link.title === "Services" && setDropdownOpen(true)
              }
              onMouseLeave={() =>
                link.title === "Services" && setDropdownOpen(false)
              }
              onClick={() => link.title === "Services" && toggleDropdown()}
              onFocus={() => link.title === "Services" && setDropdownOpen(true)}
              onBlur={() => link.title === "Services" && setDropdownOpen(false)}
            >
              <LinkTitle
                showServicesDropdown={link.title === "Services" ? true : false}
              >
                {link.title}
              </LinkTitle>
              {link.title === "Services" && (
                <IconContainer>
                  <Image
                    src="/icons/down-arrow.svg"
                    width={10}
                    height={10}
                    alt="arrow down"
                    priority={true}
                  />
                </IconContainer>
              )}
              {link.title === "Services" && (
                <ServicesDropDownContainer dropdownOpen={dropdownOpen}>
                  {servicesLinks.map((link, index) => (
                    <Link key={index} href={link.link} passHref>
                      <ServicesLinkTitle
                        onClick={() => setDropdownOpen(false)}
                        onKeyUp={(e) => {
                          const key = e.key === 13 || e.keyCode === 13;
                          key && setDropdownOpen(false);
                        }}
                        role="button"
                        tabIndex="0"
                      >
                        {link.title}
                      </ServicesLinkTitle>
                    </Link>
                  ))}
                </ServicesDropDownContainer>
              )}
            </LinkInnerContainer>
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
  font-family: "Karla-Bold";
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
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.span`
  font-size: 2rem;
  position: relative;
  color: white;
  font-family: "Karla-Bold";
`;

const SmallTitle = styled.span`
  font-size: 1.3rem;
  position: absolute;
  bottom: 0px;
  color: white;
  font-family: "Karla-Bold";
`;

const ServicesDropDownContainer = styled.div`
  position: absolute;
  top: 40px;
  transform: scale(0.98);
  left: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 5px 0px;
  opacity: 0;
  visibility: hidden;
  border-radius: 4px;
  transition: all 0.25s;
  justify-content: center;
  background-color: #1f2937;
  box-shadow: 0px 13px 27px -5px rgba(50, 50, 93, 0.25),
    0px 8px 16px -8px rgba(0, 0, 0, 0.3),
    0px -6px 16px -6px rgba(0, 0, 0, 0.025);
  ${({ dropdownOpen }) =>
    dropdownOpen &&
    `
      opacity: 1;
      visibility: visible;
      top: 48px;
      transform: scale(1);
      `}
  &:before {
    content: "";
    position: absolute;
    right: 18.5px;
    top: -6px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 6.5px solid #1f2937;
    border-radius: 2px;
  }
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

const IconContainer = styled.div`
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkTitle = styled.span`
  position: relative;
  font-family: "SF Pro Display Medium";
  font-weight: 700;
  margin-right: 7px;
  color: ${({ theme }) => theme.white};
  font-size: 1.17rem;
  transition: all 0.3s;
  position: relative;
`;

const LinkInnerContainer = styled.a`
  display: flex;
  flex-direction: row;
  transition: all 0.1s;
  padding: 10px 20px 9px 45px;
  &:hover {
    cursor: pointer;
    ${IconContainer} {
      opacity: 0.7;
    }
    ${LinkTitle} {
      opacity: 0.7;
    }
  }
`;

const ServicesLinkTitle = styled.span`
  font-size: 1.03rem;
  padding: 10px 25px;
  box-sizing: border-box;
  opacity: 0.8;
  width: 100%;
  text-align: center;
  transition: all 0.2s ease;
  color: ${({ theme }) => theme.white};
  font-family: "Karla-Medium";
  font-weight: 700;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  &:hover {
    opacity: 1;
    border-left: 2px solid white;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
