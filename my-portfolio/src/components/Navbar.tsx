import React from 'react';
import logo from '../../public/bandgeek-dev-logo.svg';

const Navbar: React.FC = () => {
  return (
    <nav className='bg-transparent text-black font-sans'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <img src={logo} alt='Logo' className='h-[128px] w-[128px] mr-2' />
        </div>
        <div className='space-x-4 me-4'>
          <a href='#home' className='hover:underline'>
            Home
          </a>
          <a href='#about' className='hover:underline'>
            About
          </a>
          <a href='#projects' className='hover:underline'>
            Projects
          </a>
          <a href='#contact' className='hover:underline'>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
