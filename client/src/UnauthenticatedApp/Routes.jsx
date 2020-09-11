import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import LoginPage from './LoginPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/register">
        <h1>Register page</h1>
      </Route>
      <Route path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
