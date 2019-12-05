import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { LoginContainer, Title } from "./login.styles";

const Login = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setCredentials] = useState({ email: "", password: "" });
  
  const { email, password } = userCredentials;

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  return (
    <LoginContainer>
      <Title>I have an account</Title>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="email"
          value={email}
          required
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={password}
          onChange={handleChange}
          required
        />
        <CustomButton type="submit">Log In</CustomButton>
        <CustomButton
          type="button"
          onClick={googleSignInStart}
          isGoogleSignIn
        >
          Sign In With Google
          </CustomButton>
      </form>
    </LoginContainer>
  );
}

export default Login;
