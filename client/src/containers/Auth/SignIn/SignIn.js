import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { InputField } from "../../../components/UI/InputField";
import Form from "../../../components/UI/Form";
import Button from "../../../components/UI/Button";
import TextButton from "../../../components/UI/TextButton";
import { loginUser, clearAuthError } from "../../../store/actions/authActions";
import ErrorMsg from "../../../components/UI/ErrorMsg/ErrorMsg";
import { CubeGrid } from "styled-spinkit";
import posed from "react-pose";

const AnimateForm = posed(Form)({
  closed: { y: "200px", opacity: 0 },
  open: {
    y: "0",
    opacity: 1,
    transition: { type: "spring", mass: 0.7 }
  }
});

const SignIn = ({ errors, loading, loginUser, toggleAuth, clearAuthError }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  useEffect(() => {
    return () => {
      clearAuthError();
    };
  }, []);
  const inputOnChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const formOnSubmit = e => {
    e.preventDefault();
    const userData = {
      email,
      password
    };

    loginUser(userData);
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
      {errors ? <ErrorMsg errors={errors} /> : null}
      <Button type="submit">Login</Button>
      <p>
        No account? <TextButton onClick={toggleAuth}>Sign Up</TextButton>
      </p>
    </AnimateForm>
  );
};

const mapStateToProps = state => ({
  errors: state.auth.errors.signInErrors,
  loading: state.auth.loading
});

export default connect(
  mapStateToProps,
  { loginUser, clearAuthError }
)(SignIn);
