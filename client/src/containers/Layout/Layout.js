import React, { useState } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "../../utills/theme";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import AnimatedToggler from "../../components/Navigation/Toggler";

const Layout = ({ children, isAuth, user }) => {
  const [navIsOpen, setNavIsOpen] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <>
        {isAuth ? (
          <>
            <AnimatedToggler
              onClick={() => setNavIsOpen(prevNavIsOpen => !prevNavIsOpen)}
            />
            <SideDrawer user={user} navIsOpen={navIsOpen} />
          </>
        ) : null}

        <main>{children}</main>
        <footer />
      </>
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  user: state.auth.user
});

export default connect(mapStateToProps)(Layout);
