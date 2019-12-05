import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { RegisterContainer, Title } from "./register.styles";

const Register = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }

    signUpStart({ displayName, email, password });
  };

  return (
    <RegisterContainer>
      <Title>I do not have an account</Title>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          required
          onChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          required
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          required
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          required
          onChange={handleChange}
        />
        <CustomButton type="submit">Register</CustomButton>
      </form>
    </RegisterContainer>
  );
}

export default Register;
