import React from "react";

import { auth } from "../../firebase/firebase.utils";
import CartIconContainer from "../cart-icon/cart-icon.container";
import CartDropdownContainer from "../cart-dropdown/cart-dropdown.container";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">Shop</OptionLink>
      <OptionLink to="/shop">Contact</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          Log Out
        </OptionLink>
      ) : (
        <OptionLink to="/login">Log In</OptionLink>
      )}
      <CartIconContainer />
    </OptionsContainer>
    {hidden ? null : <CartDropdownContainer />}
  </HeaderContainer>
);

export default Header;
