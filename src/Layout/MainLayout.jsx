import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {
  return (
    <div>

      <header>
        <Navbar></Navbar>
      </header>
      
      <main>
        <Outlet></Outlet>
      </main>

      <footer className='border-t-[1px]'>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;