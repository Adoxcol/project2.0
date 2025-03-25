import React from 'react';
import BackButton from './BackButton';
import Navbar from './NavBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      
      <Navbar />

      
      <div className="page-content">{children}</div>

      
      <BackButton />
    </div>
  );
};

export default Layout;