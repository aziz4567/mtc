import React from 'react';
import { AuthProvider } from './Context/AuthContext';
import AppRouter from './Router/AppRouter';

function App() {
  return (
    <AuthProvider>
      
      <AppRouter />
    </AuthProvider>
  );
}

export default App;