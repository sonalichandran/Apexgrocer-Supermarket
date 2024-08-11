import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full transition-transform transform ${isScrolled ? 'bg-gray-800 py-2' : 'bg-transparent py-6'} z-50`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">App Name</div>
        <div className="flex space-x-4">
          <NavLink to="/" className="text-white">Home</NavLink>
          <NavLink to="/about" className="text-white">About</NavLink>
          <NavLink to="/contact" className="text-white">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
