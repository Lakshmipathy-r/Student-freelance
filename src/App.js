import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoadingScreen from './pages/LoadingScreen';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import GigMarketplace from './pages/GigMarketplace';
import Applications from './pages/Applications';
import ApplicantProfile from './pages/recruiter/ApplicantProfile';
import Messages from './pages/Messages';
import Reviews from './pages/Reviews';
import Profile from './pages/student/Profile';
import Settings from './pages/Settings';
import AlumniMentorship from './pages/AlumniMentorship';
import { useAuthStore } from './store/authStore';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const [showLoading, setShowLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (showLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="App">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#000000',
              color: '#CCFF00',
              border: '1px solid #333333',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '14px',
              textTransform: 'uppercase',
            },
            success: {
              iconTheme: {
                primary: '#CCFF00',
                secondary: '#000000',
              },
            },
            error: {
              iconTheme: {
                primary: '#FF003C',
                secondary: '#000000',
              },
            },
          }}
        />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/gigs"
            element={
              <ProtectedRoute>
                <GigMarketplace />
              </ProtectedRoute>
            }
          />
          <Route
            path="/applications"
            element={
              <ProtectedRoute>
                <Applications />
              </ProtectedRoute>
            }
          />
          <Route
            path="/applicant/:id"
            element={
              <ProtectedRoute>
                <ApplicantProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reviews"
            element={
              <ProtectedRoute>
                <Reviews />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mentorship"
            element={
              <ProtectedRoute>
                <AlumniMentorship />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
