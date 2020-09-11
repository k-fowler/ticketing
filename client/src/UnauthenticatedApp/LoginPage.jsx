import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from 'Auth/Authenticate';
const LoginPage = () => {
  const [state, setState] = useContext(AuthContext);

  return (
    <div>
      <Link
        to="/register"
        onClick={() => {
          setState({ status: 'success', error: null, user: 'User created by click' });
        }}
      >
        Click me to login
      </Link>
      <h1>login page</h1>
    </div>
  );
};
export default LoginPage;
