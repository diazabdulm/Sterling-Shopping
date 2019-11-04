import { connect } from "react-redux";

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

import Login from "./login.component";

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

const LoginContainer = connect(
  null,
  mapDispatchToProps
)(Login);

export default LoginContainer;
