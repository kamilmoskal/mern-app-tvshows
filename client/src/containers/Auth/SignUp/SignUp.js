import React from "react";
import {
  Button,
  Checkbox,
  Message,
  Form,
  Input,
  Card
} from "semantic-ui-react";
import InputField from "../../../components/UI/InputField/InputField";
import styled from "styled-components";

const MyForm = styled(Form)`
  &.ui.form {
    width: 100%;
  }
`;

const SignUp = () => {
  return (
    <MyForm>
      <Form.Input icon="user" iconPosition="left" placeholder="Name" />
      <Form.Input icon="mail" iconPosition="left" placeholder="Email" />
      <Form.Input
        icon="protect"
        iconPosition="left"
        placeholder="Password"
        type="password"
      />
      <Message
        error
        header="Action Forbidden"
        content="You can only sign up for an account once with a given e-mail address."
      />
      <Button type="submit">Submit</Button>
    </MyForm>
  );
};

export default SignUp;
