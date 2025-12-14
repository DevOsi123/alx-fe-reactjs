import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import ProfileDetails from './pages/ProfileDetails.jsx';
import ProfileSettings from './pages/ProfileSettings.jsx';
import UserPost from './pages/UserPost.jsx';
import Login from './pages/Login.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {
  const [isAuth, setIsAuth] = useState(false); // Simulated auth state

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested routes */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        <Route path="/user/:id" element={<UserPost />} /> {/* Dynamic route */}
        <Route path="/login" element={<Login setAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
