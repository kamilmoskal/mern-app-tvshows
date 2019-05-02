import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SingIn";
import posed, { PoseGroup } from "react-pose";
import { Route, Redirect } from "react-router-dom";
import styled from "styled-components";

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props =>
    props.bg ? `url('${props.bg}') no-repeat center center/cover` : "black"};
`;
const FormWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 40px;
  z-index: 0;

  @media (min-width: 500px) {
    width: 400px;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.6;
    z-index: -1;
  }

  .ui.form {
    width: 100%;
  }
`;
const config = {
  enter: {
    scale: 1,
    opacity: 1,
    applyAtStart: { display: "block" },
    transition: { duration: 500 }
  },
  exit: {
    scale: 0,
    opacity: 0,
    applyAtStart: { display: "none" },
    transition: { duration: 500 }
  }
};
const AnimateSignIn = posed(SignIn)({ ...config });
const AnimateSignUp = posed(SignUp)({ ...config });
const API_KEY = "4bba9cc0bb6eb5b67b64c5a5a057e2fc";
const Auth = props => {
  const [bgUrl, setBgUrl] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
      .then(res => {
        const size = window.innerWidth > 500 ? "original" : "w780";
        console.log(size);
        const randomTv = Math.floor(Math.random() * 19) + 1;
        const url = res.data.results[randomTv].backdrop_path;
        if (url) {
          setBgUrl(`http://image.tmdb.org/t/p/${size}/${url}`);
        } else {
          setBgUrl(
            `http://image.tmdb.org/t/p/${size}/qsD5OHqW7DSnaQ2afwz8Ptht1Xb.jpg`
          );
        }
      })
      .catch(err => console.log(err));
  }, []);
  const toggleAuth = () => {
    setIsSignIn(prevIsSignIn => !prevIsSignIn);
  };

  return (
    <Overlay bg={bgUrl}>
      <FormWrapper>
        {/* {isSignIn ? (
          <SignIn toggleAuth={toggleAuth} />
        ) : (
          <SignUp toggleAuth={toggleAuth} />
        )} */}
        <PoseGroup>
          {isSignIn ? (
            <AnimateSignIn key="1" toggleAuth={toggleAuth} />
          ) : (
            <AnimateSignUp key="2" toggleAuth={toggleAuth} />
          )}
        </PoseGroup>
      </FormWrapper>
    </Overlay>
  );
};

export default Auth;
