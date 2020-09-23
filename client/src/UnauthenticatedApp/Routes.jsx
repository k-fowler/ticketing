import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import DemoUserPage from './DemoUserPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/register">
        <RegisterPage />
      </Route>
      <Route exact path="/demo">
        <DemoUserPage />
      </Route>
      <Route path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
