import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// import { getCurrentUser } from "../../pages/api/auth";

const ResponsiveHeader = React.forwardRef(
  ({ burgerOpen, handleBurgerClick, links, adminLinks }, ref) => {
    const contentRef = useRef(null);
    const [user, setUser] = useState(null);
    useEffect(() => {
      // const currentUser = getCurrentUser();
      // setUser(currentUser);
    }, [burgerOpen]);

    const onClick = () => {
      handleBurgerClick();
      contentRef.current.scrollTop = 0;
    };

    const headerAnimation = {
      hidden: {
        clipPath: "circle(0px at 214px 62px)",
        right: "0px",
        width: "280px",
        backgroundColor: "grey",
        transition: {
          staggerDirection: -1,
          staggerChildren: 0.05,
          delay: 0.5,
          type: "spring",
          stiffness: 400,
          damping: 40,
        },
      },
      show: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
          type: "spring",
          stiffness: 20,
          restDelta: 2,
          staggerChildren: 0.07,
          delayChildren: 0.1,
        },
      }),
    };

    const overlayAnimation = {
      hidden: {
        opacity: 0,
        transition: {
          delay: 0.5,
        },
      },
      show: {
        opacity: 1,
      },
    };

    const linkAnimation = {
      hidden: {
        y: 50,
        opacity: 0,
        transition: {
          y: { stiffness: 1000 },
          stiffness: 10,
        },
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          y: { stiffness: 1000, velocity: -100 },
          stiffness: 10,
        },
      },
    };

    return (
      <React.Fragment>
        <AnimatePresence>
          {burgerOpen && (
            <Overlay
              variants={overlayAnimation}
              initial="hidden"
              animate={burgerOpen ? "show" : "hidden"}
              exit="hidden"
              burgerOpen={burgerOpen}
              tabIndex="0"
              role="button"
            />
          )}
        </AnimatePresence>
        <Container ref={ref}>
          <GlobalStyle burgerOpen={burgerOpen} />

          <Burger
            burgerOpen={burgerOpen}
            onClick={onClick}
            id="burgerOpen"
            data-testid="burgerOpen"
            tabIndex="0"
            role="button"
            onKeyDown={(e) => {
              const key = e.key === 13 || e.keyCode === 13;
              key && onClick();
            }}
          >
            <BurgerInner burgerOpen={burgerOpen} />
          </Burger>
          <Content
            ref={contentRef}
            burgerOpen={burgerOpen}
            variants={headerAnimation}
            initial="hidden"
            animate={burgerOpen ? "show" : "hidden"}
            onBlur={() => console.log("sup")}
          >
            {links.map((link, index) => (
              <Link key={index} href={link.link} passHref>
                <BurgerLinkTitle
                  onClick={onClick}
                  user={user}
                  variants={linkAnimation}
                  key={index}
                >
                  {link.title}
                </BurgerLinkTitle>
              </Link>
            ))}
            {user && (
              <BurgerSubTitle variants={linkAnimation}>Admin</BurgerSubTitle>
            )}
            {user &&
              adminLinks.map((link) => (
                <Link
                  key={link.route}
                  href="/admin/[id]"
                  as={link.route}
                  passHref
                >
                  <BurgerLinkTitle
                    onClick={onClick}
                    user={user}
                    variants={linkAnimation}
                    key={link.route}
                  >
                    {link.title}
                  </BurgerLinkTitle>
                </Link>
              ))}
          </Content>
        </Container>
      </React.Fragment>
    );
  }
);

export default ResponsiveHeader;

const GlobalStyle = createGlobalStyle`
 body {
   overflow: ${({ burgerOpen }) =>
     burgerOpen ? "hidden !important" : "scroll"};
   overscroll-behavior: none;
  }
`;

const Container = styled(motion.div)`
  display: none;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  z-index: 100;
  @media (max-width: 936px) {
    display: flex;
  }
`;

const Burger = styled.div`
  display: none;
  position: relative;
  width: 32px;
  height: 24px;
  padding: 5px;
  margin-right: 50px;
  margin-left: auto;
  z-index: 200;
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    display: inline-block;
  }
  @media (max-width: 330px) {
    padding-left: 21.4px;
    padding-right: 21.4px;
  }
`;

const BurgerInner = styled.div`
  position: absolute;
  width: ${({ burgerOpen }) => (burgerOpen ? "32px" : "28px")};
  height: 3.45px;
  transition-timing-function: ease;
  transition-duration: 0.15s;
  transition-property: transform;
  border-radius: 4px;
    background-color: white;
  transform: ${({ burgerOpen }) =>
    burgerOpen
      ? `translate3d(0, 10px, 0) rotate(45deg)`
      : `translate3d(0, 0px, 0) rotate(0deg)`}
  };
  &::before {
    display: block;
    content: "";
    top: 10px;
    transition-property: transform, opacity;
    position: absolute;
    width: 32px;
    height: 3.45px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
    background-color: white;
    opacity: ${({ burgerOpen }) => (burgerOpen ? 0 : 1)}
  };
  &::after {
    top: 20px;
    display: block;
    content: "";
    position: absolute;
    width: ${({ burgerOpen }) => (burgerOpen ? "32px" : "26px")};
    height: 3.45px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
      background-color: white;
    bottom: -10px;
    transform: ${({ burgerOpen }) =>
      burgerOpen
        ? `translate3d(0,-20px, 0) rotate(-90deg)`
        : `translate3d(0, 0px, 0) rotate(0deg)`}
  };
`;

const Overlay = styled(motion.div)`
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  margin-right: 280px;
  background-color: rgba(0, 0, 0, 0.25);
`;

const Content = styled(motion.div)`
  top: 0;
  box-sizing: border-box;
  padding-top: 108px;
  height: 100vh;
  display: flex;
  z-index: 12;
  padding-right: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: fixed;
  overflow: scroll;
  background: grey;
  @media (max-width: 350px) {
    width: 250px;
  }
`;

const BurgerLinkTitle = styled(motion.a)`
  white-space: nowrap;
  padding: 20px 20px;
  padding-left: 10px;
  box-sizing: border-box;
  border-top: 1px solid white;
  transition: all 0.3s ease;
  opacity: 1;
  width: 100%;
  font-family: "Karla-bold";
  color: white;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    background-color: rgba(203, 195, 186, 0.3);
  }
  &:first-child {
    border-top: none;
  }
  &:nth-child(5) {
    border-bottom: ${({ user, theme }) => (user ? `1px solid white` : "none")};
  }
  &:last-child {
    border-bottom: 1px solid white;
    margin-bottom: 70px;
  }
`;

const BurgerSubTitle = styled(motion.h4)`
  margin-top: 55px;
  margin-bottom: 5.5px;
  font-size: 0.8rem;
  padding-left: 10px;
  font-weight: bold;
  text-align: left;
  border-left: ${({ user }) => (user ? "1px solid white" : "none")};
  &:hover {
    cursor: default;
  }
`;
