import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">Go to Login</Link>
          </li>
          <li>
            <Link to="/register">Go to Register</Link>
          </li>
          <li>
            <Link to="/profile">Go to Profile</Link>
          </li>
          <li>
            <Link to="/posts">Go to Posts</Link>
          </li>
          <li>
            <Link to="/categories">Go to Categories</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;