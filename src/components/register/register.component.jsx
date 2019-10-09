import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { RegisterContainer, Title } from "./register.styles";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <RegisterContainer>
        <Title>I do not have an account</Title>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            value={displayName}
            required
            onChange={this.handleChange}
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            required
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            required
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            required
            onChange={this.handleChange}
          />
          <CustomButton type="submit">Register</CustomButton>
        </form>
      </RegisterContainer>
    );
  }
}

export default Register;
