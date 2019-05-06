import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { InputField } from "../../../components/UI/InputField";
import { AnimateForm } from "../../../components/UI/Form";
import { Button } from "../../../components/UI/Button";
import TextButton from "../../../components/UI/TextButton";
import { loginUser, clearAuthError } from "../../../store/actions/authActions";
import ErrorMsg from "../../../components/UI/ErrorMsg/ErrorMsg";
import { CubeGrid } from "styled-spinkit";

const SignIn = ({ errors, loading, toggleAuth, dispatch }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const errorsRef = useRef();
  useEffect(() => {
    errorsRef.current = errors;
  }, [errors]);
  useEffect(() => {
    return () => {
      if (errorsRef.current.length > 0) {
        dispatch(clearAuthError());
      }
    };
  }, [dispatch]);

  const inputOnChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const formOnSubmit = e => {
    e.preventDefault();
    const userData = {
      email,
      password
    };

    dispatch(loginUser(userData));
    setFormData({ email: "", password: "" });
  };
  const { email, password } = formData;

  if (loading) {
    return <CubeGrid color="#ec4d37" size={60} />;
  }
  return (
    <AnimateForm onSubmit={formOnSubmit} initialPose="closed" pose="open">
      <h2>SIGN IN</h2>
      <InputField
        placeholder="Email"
        type="text"
        name="email"
        value={email}
        onChange={inputOnChange}
      />
      <InputField
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        onChange={inputOnChange}
      />
      {errors.length > 0 ? <ErrorMsg errors={errors} /> : null}
      <Button margin type="submit">
        Login
      </Button>
      <p>
        No account? <TextButton onClick={toggleAuth}>Sign Up</TextButton>
      </p>
    </AnimateForm>
  );
};

SignIn.propTypes = {
  errors: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  toggleAuth: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.auth.errors.signInErrors,
  loading: state.auth.loading
});

export default connect(mapStateToProps)(SignIn);
