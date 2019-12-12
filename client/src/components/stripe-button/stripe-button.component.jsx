import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_OHxxzYFjfBOSHwcdz7iCeCLJ00WcoV6zyL";

  const onToken = token => {
    axios
      .post("/payment", {
        amount: priceForStripe,
        token
      })
      .then(response => {
        alert("Payment successful");
      })
      .catch(error => {
        console.log(`Payment error: ${JSON.parse(error)}`);
        alert(
          "There was an issue with your payment. Please try again with the test credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Sterling Co."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Total price: $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
