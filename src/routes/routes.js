import React from "react";
import { isAuthenticated } from "../providers/auth";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import PrivateRoute from "../components/privateRoute";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1>Hello World</h1>} />
      <PrivateRoute path="/app" component={() => <h1>Você está logado</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
