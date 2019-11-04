import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPageContainer from "./pages/shop/shop.container";
import CheckoutPageContainer from "./pages/checkout/checkout.container";
import ErrorPage from "./pages/error/error.component";
import LoginAndRegisterPage from "./pages/login-and-register/login-and-register.component";
import HeaderContainer from "./components/header/header.container";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPageContainer} />
        <Route
          exact
          path="/login"
          render={() =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
                <LoginAndRegisterPage />
              )
          }
        />
        <Route exact path="/checkout" component={CheckoutPageContainer} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
