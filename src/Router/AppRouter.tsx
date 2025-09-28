import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Homepage, Events, Join } from '../Utils/lazyLoading';
import { useAuth } from '../Context/AuthContext';
import ErrorBoundary from '../Components/ErrorBoundary';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
};

// Public Route Component (redirects to dashboard if authenticated)
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return <>{children}</>;
};

const AppRouter: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <PublicRoute>
                <ErrorBoundary>
                  <Homepage />
                </ErrorBoundary>
              </PublicRoute>
            } 
          />
          <Route 
            path="/join" 
            element={
              <PublicRoute>
                <ErrorBoundary>
                  <Join />
                </ErrorBoundary>
              </PublicRoute>
            } 
          />
          <Route 
            path="/events" 
            element={
              <PublicRoute>
                <ErrorBoundary>
                  <Events />
                </ErrorBoundary>
              </PublicRoute>
            } 
          />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default AppRouter;