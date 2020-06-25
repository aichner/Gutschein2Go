//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { Route, Switch } from "react-router-dom";

//> Components
/**
 * HomePage: A basic template page
 */
import {
  HomePage,
  MessagePage,
  JoinPage,
  ShopPage,
  ManagePage,
  LoginPage,
} from "./components/pages";
//#endregion

//#region > Components
class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route
          exact
          path="/manage"
          render={(props) => <ManagePage {...props} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <LoginPage {...props} />}
        />
        <Route
          exact
          path="/about"
          render={(props) => <MessagePage {...props} />}
        />
        <Route
          exact
          path="/privacy"
          render={(props) => <MessagePage {...props} />}
        />
        <Route
          exact
          path="/agb"
          render={(props) => <MessagePage {...props} />}
        />
        <Route
          exact
          path="/anb"
          render={(props) => <MessagePage {...props} />}
        />
        <Route exact path="/join" render={(props) => <JoinPage {...props} />} />
        <Route
          exact
          path="/s/:username"
          render={(props) => <ShopPage {...props} />}
        />
        <Route component={HomePage} />
      </Switch>
    );
  }
}
//#endregion

//#region > Routes
export default Routes;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
