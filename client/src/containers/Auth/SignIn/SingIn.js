import React, { useEffect } from "react";
import {
  Button,
  Checkbox,
  Message,
  Segment,
  Form,
  Input,
  Card,
  Label,
  Divider,
  Icon,
  Ref
} from "semantic-ui-react";
import InputField from "../../../components/UI/InputField/InputField";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyForm = styled(Form)`
  &.ui.form {
    width: 100%;
  }
`;

const SignIn = React.forwardRef((props, innerRef) => {
  useEffect(() => {
    return () => {
      console.log("unounted");
    };
  }, []);
  return (
    <Ref innerRef={innerRef}>
      <Form inverted>
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
        <Button fluid inverted type="submit">
          <Icon name="sign in" />
          Log in
        </Button>
        <Divider inverted horizontal>
          or
        </Divider>
        <Button fluid inverted type="button" onClick={props.toggleAuth}>
          change to: Sign up
        </Button>
      </Form>
    </Ref>
  );
});

export default SignIn;
