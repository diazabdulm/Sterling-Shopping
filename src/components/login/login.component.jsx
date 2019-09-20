import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./login.styles.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="login">
        <h2>I have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            label="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Log In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
        </form>
      </div>
    );
  }
}

export default Login;
