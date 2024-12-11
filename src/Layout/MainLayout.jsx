import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const MainLayout = () => {
  return (
    <div>

      <header>
        <Navbar></Navbar>
      </header>
      
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayout;