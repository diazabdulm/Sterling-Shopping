import React from "react";

import Login from "../../components/login/login.component";
import Register from "../../components/register/register.component";

import "./login-and-register.styles.scss";

const LoginAndRegisterPage = () => (
  <div className="login-and-register">
    <Login />
    <Register />
  </div>
);

export default LoginAndRegisterPage;
