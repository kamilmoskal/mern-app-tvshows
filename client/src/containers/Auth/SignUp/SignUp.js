import React, { useState } from "react";
import { Button, Message, Form, Divider, Icon, Ref } from "semantic-ui-react";

const SignUp = React.forwardRef((props, innerRef) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const inputOnChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const formOnSubmit = e => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password
    };
    const config = {
      "Content-Type": "application/json"
    };
    const body = JSON.stringify(newUser);
    console.log(body);
  };
  const { name, email, password } = formData;
  return (
    <Ref innerRef={innerRef}>
      <Form onSubmit={formOnSubmit}>
        <Form.Input
          icon="user"
          iconPosition="left"
          placeholder="Name"
          name="name"
          value={name}
          onChange={inputOnChange}
        />
        <Form.Input
          icon="mail"
          iconPosition="left"
          placeholder="Email"
          name="email"
          value={email}
          onChange={inputOnChange}
        />
        <Form.Input
          icon="protect"
          iconPosition="left"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={inputOnChange}
        />
        <Message
          error
          header="Action Forbidden"
          content="You can only sign up for an account once with a given e-mail address."
        />
        <Button fluid inverted type="submit">
          <Icon name="plus square outline" />
          Sign Up
        </Button>
        <Divider inverted horizontal>
          or
        </Divider>
        <Button fluid inverted type="button" onClick={props.toggleAuth}>
          change to: Log in
        </Button>
      </Form>
    </Ref>
  );
});

export default SignUp;
