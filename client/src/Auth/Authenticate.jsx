import React from 'react';

import api from 'shared/utils/api';
import { removeStoredAuthToken, storeAuthToken } from 'shared/utils/authToken';

const AuthContext = React.createContext([{}, function () {}]);

function AuthProvider({ children }) {
  const stateAndSetState = React.useState({
    status: 'pending',
    error: null,
    user: null,
  });

  React.useEffect(() => {
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

const loginUser = async (userData) => {
  let response = {};
  try {
    const { token } = await api.post('/api/v1/auth/login', userData);
    storeAuthToken(token);
    response = {
      status: 'success',
      error: null,
      token,
    };
  } catch (error) {
    response = {
      status: 'error',
      error,
      token: null,
    };
  }
  return response;
};

const getCurrentUser = async () => {
  const response = await api.get('/api/v1/auth/me');
  return response;
};

export { AuthProvider, AuthContext, useAuthState, loginUser };
