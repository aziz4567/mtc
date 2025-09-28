import React from 'react';
import { AuthProvider } from './Context/AuthContext';
import AppRouter from './Router/AppRouter';
import AdaptiveCursor from './Components/Cursor';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <AdaptiveCursor />
        <AppRouter />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
