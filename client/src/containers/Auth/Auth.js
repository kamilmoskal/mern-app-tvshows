import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Background, Wrapper } from "./styled";
import { getBg } from "../../store/actions/moviedbActions";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

const Auth = ({ bgUrl, getBg, isAuth }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  useEffect(() => {
    if (!bgUrl) {
      getBg();
    }
  }, []);
  const toggleAuth = () => {
    setIsSignIn(prevIsSignIn => !prevIsSignIn);
  };
  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Background bgUrl={bgUrl}>
      <Wrapper>
        {isSignIn ? (
          <SignIn toggleAuth={toggleAuth} />
        ) : (
          <SignUp toggleAuth={toggleAuth} />
        )}
      </Wrapper>
    </Background>
  );
};

Auth.propTypes = {
  bgUrl: PropTypes.string.isRequired,
  getBg: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  bgUrl: state.moviedb.bgUrl,
  isAuth: state.auth.isAuth
});

export default connect(
  mapStateToProps,
  { getBg }
)(Auth);
