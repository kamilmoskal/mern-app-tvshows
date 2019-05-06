import styled from "styled-components";
import { NavLink } from "react-router-dom";
import posed from "react-pose";

export const Nav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 320px;
  height: 100vh;
  //overflow: scroll;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.card};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const AnimatedNav = posed(Nav)({
  closed: {
    x: "-100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 500
    }
  },
  open: {
    x: "0",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 500
    }
  }
});

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

export const AnimatedNavList = posed(NavList)({
  open: {
    //delayChildren: 100,
    staggerChildren: 100
  },
  closed: {}
});

export const NavItem = styled.li`
  margin: 5px 0;
  width: 100%;
`;

export const AnimatedNavItem = posed(NavItem)({
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 20,
      delay: 200,
      duration: 200
    }
  },
  closed: { y: 100, opacity: 0 },
  pressable: true,
  init: {
    scale: 1,
    rotate: "0",
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  press: {
    scale: 0.8,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});

export const StyledNavLink = styled(NavLink)`
  padding: 10px 15px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.black};
  transition: all 0.2s ease;
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: center;
  align-items: center;
  grid-gap: 0px;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    grid-gap: 10px;
    box-shadow: ${({ theme }) => theme.card};
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 50%;
`;
