import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/profile">Profile</Link> |{' '}
        <Link to="/user/123">User Post 123</Link>
      </nav>
    </div>
  );
};

export default Home;
