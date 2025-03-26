import React from 'react';
import Navbar from './Navbar';
import BackButton from './BackButton';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
    
      <Navbar />

      
      <main className="flex-grow">{children}</main>

      
      <BackButton />
    </div>
  );
};

export default Layout;