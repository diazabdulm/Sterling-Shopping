import React from "react";

import CheckoutItemContainer from "../../components/checkout-item/checkout-item.container";
import StripeButton from "../../components/stripe-button/stripe-button.component";


import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalContainer,
  TestWarningMessage
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>
    {cartItems.map(cartItem => (
      <CheckoutItemContainer key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>
      <span>TOTAL: ${total}</span>
    </TotalContainer>
    <TestWarningMessage>
      Please use the following test card information for payments:
      <br />
      4242 4242 4242 4242 | Expiration: 01/20 | CVC: 123
    </TestWarningMessage>
    <StripeButton price={total} />
  </CheckoutPageContainer>
);

export default CheckoutPage;
