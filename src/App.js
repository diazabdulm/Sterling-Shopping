import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = props => <div>Hats Page</div>;

const ErrorPage = props => (
  <div>
    <Link to="/hats">Go to hats. You're in the wrong place</Link>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
