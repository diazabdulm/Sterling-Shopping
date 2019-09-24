import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/shop">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Log Out
        </div>
      ) : (
        <Link className="option" to="/login">
          Log In
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

export default connect(mapStateToProps)(Header);
