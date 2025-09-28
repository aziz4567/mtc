import React from 'react';
import { AuthProvider } from './Context/AuthContext';
import AppRouter from './Router/AppRouter';
import MirrorCursor from './Components/Cursor';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <MirrorCursor />
        <AppRouter />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
