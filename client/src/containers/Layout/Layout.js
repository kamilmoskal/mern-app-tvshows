import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Background } from "./styled";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "../../utills/theme";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import AnimatedToggler from "../../components/Navigation/Toggler";
import { getBg } from "../../store/actions/moviedbActions";

const Layout = ({ children, isAuth, user, bgUrl, dispatch }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  useEffect(() => {
    dispatch(getBg());
  }, [dispatch]);
  console.log("layout");
  return (
    <ThemeProvider theme={theme}>
      <Background bgUrl={bgUrl}>
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
      </Background>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  bgUrl: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  user: state.auth.user,
  bgUrl: state.moviedb.bgUrl
});

export default connect(mapStateToProps)(Layout);
