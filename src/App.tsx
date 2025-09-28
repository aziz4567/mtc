import React from 'react';
import { AuthProvider } from './Context/AuthContext';
import AppRouter from './Router/AppRouter';
import CustomCursor from './Components/Cursor';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <CustomCursor />
        <AppRouter />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
