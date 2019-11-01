import React from "react";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CheckoutButton
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CheckoutButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      Checkout
    </CheckoutButton>
  </CartDropdownContainer>
);

export default CartDropdown;
