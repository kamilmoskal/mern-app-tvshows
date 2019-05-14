import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Wrapper } from "./styled";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

const Auth = ({ isAuth }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleAuth = () => {
    setIsSignIn(prevIsSignIn => !prevIsSignIn);
  };
  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Wrapper>
      {isSignIn ? (
        <SignIn toggleAuth={toggleAuth} />
      ) : (
        <SignUp toggleAuth={toggleAuth} />
      )}
    </Wrapper>
  );
};

Auth.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(Auth);
