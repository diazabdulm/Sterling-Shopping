import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_OHxxzYFjfBOSHwcdz7iCeCLJ00WcoV6zyL";

  const onToken = token => {
      console.log(token);
      alert('Payment successful');
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Sterling Co."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Total price: $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
