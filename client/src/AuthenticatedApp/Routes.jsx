import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/dashboard">
        <h1>Dashboard</h1>
      </Route>
      <Route exact path="/tickets">
        <h1>Tickets page</h1>
      </Route>
      <Route path="/">
        <Redirect to="/dashboard" />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
