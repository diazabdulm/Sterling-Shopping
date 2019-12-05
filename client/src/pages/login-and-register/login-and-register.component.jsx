import React from "react";

import LoginContainer from "../../components/login/login.container";
import RegisterContainer from "../../components/register/register.container";

import { LoginAndRegisterContainer } from "./login-and-register.styles";

const LoginAndRegisterPage = () => (
  <LoginAndRegisterContainer>
    <LoginContainer />
    <RegisterContainer />
  </LoginAndRegisterContainer>
);

export default LoginAndRegisterPage;
