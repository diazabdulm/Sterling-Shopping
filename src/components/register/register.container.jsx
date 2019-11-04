import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user.actions";

import Register from "./register.component";

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(Register);
