import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  registerUser,
  clearAuthError
} from "../../../store/actions/authActions";
import { InputField } from "../../../components/UI/InputField";
import Form from "../../../components/UI/Form";
import { Button } from "../../../components/UI/Button";
import TextButton from "../../../components/UI/TextButton";
import ErrorMsg from "../../../components/UI/ErrorMsg/ErrorMsg";
import { CubeGrid } from "styled-spinkit";
import posed from "react-pose";

const AnimateForm = posed(Form)({
  closed: { y: "200px", opacity: 0 },
  open: { y: "0", opacity: 1, transition: { type: "spring", mass: 0.7 } }
});
const SignUp = ({
  errors,
  loading,
  registerUser,
  toggleAuth,
  clearAuthError
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  useEffect(() => {
    return () => {
      if (errors) {
        clearAuthError();
      }
    };
  }, []);
  const inputOnChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const formOnSubmit = e => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password
    };

    registerUser(newUser);
  };
  const { name, email, password } = formData;
  if (loading) {
    return <CubeGrid color="#ec4d37" size={60} />;
  }
  return (
    <AnimateForm onSubmit={formOnSubmit} initialPose="closed" pose="open">
      <h2>SIGN UP</h2>
      <InputField
        placeholder="Name"
        type="text"
        name="name"
        value={name}
        onChange={inputOnChange}
      />
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
        Register
      </Button>
      <p>
        You have already account?{" "}
        <TextButton onClick={toggleAuth}>Sign In</TextButton>
      </p>
    </AnimateForm>
  );
};

SignUp.propTypes = {
  errors: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  registerUser: PropTypes.func.isRequired,
  toggleAuth: PropTypes.func.isRequired,
  clearAuthError: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.auth.errors.signUpErrors,
  loading: state.auth.loading
});

export default connect(
  mapStateToProps,
  { registerUser, clearAuthError }
)(SignUp);
