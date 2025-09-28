import React from 'react';
import { AuthProvider } from './Context/AuthContext';
import AppRouter from './Router/AppRouter';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
