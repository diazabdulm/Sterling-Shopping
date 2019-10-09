import React from "react";

import Login from "../../components/login/login.component";
import Register from "../../components/register/register.component";

import { LoginAndRegisterContainer } from "./login-and-register.styles";

const LoginAndRegisterPage = () => (
  <LoginAndRegisterContainer>
    <Login />
    <Register />
  </LoginAndRegisterContainer>
);

export default LoginAndRegisterPage;
