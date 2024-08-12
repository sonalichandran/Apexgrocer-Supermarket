import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate hook to navigate programmatically

  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Login",
      path: "/login"
    },
    {
      title: "Register",
      path: "/register"
    }
  ];

  const handleCart = () => {
    const token = localStorage.getItem('token'); 
    if (token) {
      navigate('/user/cart'); 
    } else {
      navigate('/login'); 
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[9vh] flex flex-row justify-start pl-12 items-center bg-black border-grey shadow-lg shadow-gray-400">
        <div className="w-1/4 h-full font-bold flex justify-start items-center text-4xl bg-black text-white">
          <NavLink to="/">  
            <div className="flex-row flex gap-4"> 
              <ShoppingCart size={46} strokeWidth={2} />
              ApExGrOcEr
            </div>
          </NavLink>
        </div>
        <div className='w-3/4 h-full font-bold flex flex-row justify-end pr-20 items-center gap-8 text-white'>
          {NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path}>
                {links.title}
              </NavLink>
            </li>
          ))}
          <ShoppingCart onClick={handleCart} className="cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
