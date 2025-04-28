import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import Profile from './Profile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Labs", path: "/lab" },
    { name: "Meditations", path: "/meditaion" },
    { name: "About Us", path: "/about" },
    { name: "AI Doctor", path: "/aidoc" },
  ];

  return (
    <nav className='flex items-center justify-between px-9 py-5 bg-transparent text-white relative'>
      {/* Logo */}
      <div className='text-2xl font-bold'>
        Next <span className='text-pink-700'>Med</span>AI
      </div>

      {/* Desktop Menu */}
      <div className='hidden lg:flex space-x-3'>
        {navLinks.map((link, index) => (
          <Link 
            key={index} 
            to={link.path} 
            className='border-2 border-teal-600 rounded-lg px-3 py-2 hover:bg-teal-600 hover:text-white transition-all'
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Icons */}
      <div className='flex items-center space-x-3'>
        <IoCallOutline className='bg-pink-600 w-9 h-9 rounded-full p-2 cursor-pointer hover:bg-pink-700 transition-all' />
        <IoMdNotificationsOutline className='bg-teal-400 w-9 h-9 rounded-full p-2 cursor-pointer hover:bg-teal-500 transition-all' />
        {/* Mobile Menu Button */}
        <CiMenuFries  onClick={toggleMenu} className='justify-self-end lg:hidden w-9 h-9 cursor-pointer' />
        {/* Profile */}
        <Profile />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-20 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-3 lg:hidden z-50'>
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              to={link.path} 
              className='border border-teal-600 rounded-lg text-black px-4 py-2 text-center hover:bg-teal-100 transition-all'
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
