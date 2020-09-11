import React from 'react';

import api from 'shared/utils/api';
import { getStoredAuthToken, removeStoredAuthToken, storeAuthToken } from 'shared/utils/authToken';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMmViNGFjZmFkNjM3MDg2NTZjODA3NCIsImlhdCI6MTU5OTc0MDAwNCwiZXhwIjoxNjAyMzMyMDA0fQ.4IA8HeUhGVoDnQvLzWhaMRzrXJcb_o_H2H1kKx0M3tcx';

const AuthContext = React.createContext([{}, function () {}]);

function AuthProvider({ children }) {
  const stateAndSetState = React.useState({
    status: 'pending',
    error: null,
    user: null,
  });

  const setLoggedInState = () => {
    stateAndSetState[1]({
      status: 'success',
      error: null,
      user: 'User created by setLoggedInState',
    });
  };

  React.useEffect(() => {
    //storeAuthToken(token);
    getCurrentUser().then(
      (data) => {
        stateAndSetState[1]({ status: 'success', error: null, user: data.data });
      },
      (error) => {
        stateAndSetState[1]({ status: 'error', error, user: null });
        removeStoredAuthToken();
      },
    );
  }, []);

  return <AuthContext.Provider value={stateAndSetState}>{children}</AuthContext.Provider>;
}

function useAuthState() {
  const state = React.useContext(AuthContext);
  const isPending = state.status === 'pending';
  const isError = state.status === 'error';
  const isSuccess = state.status === 'success';
  const isAuthenticated = state.user && isSuccess;
  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  };
}

const loginUser = async (email, password) => {
  const state = React.useContext(AuthContext);
  const userData = {
    email,
    password,
  };
  const { token } = await api.post('/api/v1/auth/login', userData);
  storeAuthToken(token);
  return token;
};

const getCurrentUser = async () => {
  const response = await api.get('/api/v1/auth/me');
  return response;
};

export { AuthProvider, AuthContext, useAuthState, loginUser };
