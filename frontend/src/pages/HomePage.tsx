import React from 'react';

import BackButton from '../components/BackButton';
import Navbar from '@/components/NavBar';

const HomePage = () => {
  return (
    <div>
     
      <Navbar />

      
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of the application.</p>

     
      <BackButton />
    </div>
  );
};

export default HomePage;