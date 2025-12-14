import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuth }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setAuth(true);
    navigate('/profile');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
