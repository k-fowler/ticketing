import React, { Suspense, useContext } from 'react';

import { AuthProvider, AuthContext } from 'Auth/Authenticate';
import PageLoader from 'shared/components/PageLoader';
const AuthenticatedApp = React.lazy(() => import('AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('UnauthenticatedApp'));

import './styles.css';

const App = () => {
  return (
    <AuthProvider>
      <AuthCrossroad />
    </AuthProvider>
  );
};

const AuthCrossroad = () => {
  const [state, setState] = useContext(AuthContext);
  return (
    <Suspense fallback={<PageLoader />}>
      {state.status === 'pending' ? (
        <PageLoader />
      ) : state.status === 'success' ? (
        <AuthenticatedApp />
      ) : (
        <UnauthenticatedApp />
      )}
    </Suspense>
  );
};

export default App;
