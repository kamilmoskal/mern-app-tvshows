import React from "react";
import {
  AnimatedNav,
  AnimatedNavList,
  AnimatedNavItem,
  StyledNavLink,
  Image
} from "./styled";
import { Dashboard } from "styled-icons/material/Dashboard";
import { Stats } from "styled-icons/boxicons-regular/Stats";
import { Profile } from "styled-icons/icomoon/Profile";
import { Edit } from "styled-icons/boxicons-solid/Edit";
import { LogOut } from "styled-icons/boxicons-regular/LogOut";

const SideDrawer = ({ user, navIsOpen }) => {
  return (
    <AnimatedNav pose={navIsOpen ? "open" : "closed"}>
      <Image src={user ? user.avatar : null} alt="User avatar" />
      <h4>Hi {user ? user.name : null}</h4>
      <AnimatedNavList pose={navIsOpen ? "open" : "closed"}>
        <AnimatedNavItem>
          <StyledNavLink to="/dashboard">
            <Dashboard size="30" title="Home" />
            Home
          </StyledNavLink>
        </AnimatedNavItem>
        <AnimatedNavItem>
          <StyledNavLink to="/asd">
            <Stats size="30" title="Stats" />
            Statistics
          </StyledNavLink>
        </AnimatedNavItem>
        <AnimatedNavItem>
          <StyledNavLink to="/asfsag">
            <Profile size="30" title="Profile" />
            Profiles
          </StyledNavLink>
        </AnimatedNavItem>
        <AnimatedNavItem>
          <StyledNavLink to="/dsgsdg">
            <Edit size="30" title="Edit" />
            Edit Profile
          </StyledNavLink>
        </AnimatedNavItem>
        <AnimatedNavItem>
          <StyledNavLink to="/sdgsdg">
            <LogOut size="30" title="Logout" />
            Logout
          </StyledNavLink>
        </AnimatedNavItem>
      </AnimatedNavList>
    </AnimatedNav>
  );
};

export default SideDrawer;
