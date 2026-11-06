import React, { useContext, useState } from 'react';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import './index.css';

const AppContent = () => {
  const { user, loading } = useContext(AuthContext);
  const [isRegister, setIsRegister] = useState(false);

  if (loading) {
    return <div className="loader">Initializing PocketTracker...</div>;
  }

  return (
    <div className="app-layout">
      <Navbar />
      <div className="content-wrap">
        {user ? (
          <Dashboard />
        ) : isRegister ? (
          <Register switchToLogin={() => setIsRegister(false)} />
        ) : (
          <Login switchToRegister={() => setIsRegister(true)} />
        )}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
