import React, { useState, useEffect } from "react";
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

const mapStateToProps = state => ({
  bgUrl: state.moviedb.bgUrl,
  isAuth: state.auth.isAuth
});

export default connect(
  mapStateToProps,
  { getBg }
)(Auth);
