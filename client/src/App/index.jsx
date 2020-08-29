import React, { useState } from 'react';
import { Router, Switch, Route, Redirect, Link, useHistory } from 'react-router-dom';

import history from 'browserHistory';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const handleClick = () => {
    setAuthenticated(!authenticated);
  };

  return (
    <Router history={history}>
      <div>
        <h1>User authenticated: {authenticated.toString()}</h1>
        <button onClick={() => handleClick()}>Toggle authentication</button>
      </div>
      <Switch>
        <Route path="/" exact>
          <h1>/ page</h1>
          <Link to="/about">Go to about</Link>
          <button onClick={() => history.push('/about')}>Click me to go to /about</button>
        </Route>
        <PrivateRoute path="/about" exact authenticated={authenticated}>
          <h1>/about page</h1>
        </PrivateRoute>
        <Route path="/">
          <h1>404 route</h1>
        </Route>
      </Switch>
    </Router>
  );
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default App;
