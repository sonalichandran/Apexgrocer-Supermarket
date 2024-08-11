import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

 

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[9vh] flex flex-row justify-start pl-12 items-center  bg-black border-grey shadow-lg shadow-gray-400">
        <div className="w-1/4  h-full  font-bold flex justify-start items-center text-4xl  bg-black text-white ">
        <NavLink to="/">  <div className="flex-row flex gap-4"> <ShoppingCart size={46} strokeWidth={2} />
          ApExGrOcEr
          </div>
          </NavLink>
        </div>
        {/* <div className="search-bar"> */}
      {/* <input
        type="text"
     
        placeholder="Search..."
        className="search-input pl-2 h-8 w-60"
      /> */}
      {/* <button  className="search-button border-2 h-8 w-16 bg-black">Search</button> */}
    {/* </div> */}
        <div className='w-3/4 h-full font-bold flex flex-row justify-end pr-20 items-center gap-8 text-white'>
          {NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path}>
                {links.title}
              </NavLink>
            </li>
          ))}
          {/* <div className="relative">
            <button
              onClick={toggleDropdown}
              className="focus:outline-none"
            >
              Category
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-primary/10 border border-gray-200 rounded shadow-lg">
                {CategoryLinks.map((link, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-primary">
                    <NavLink to={link.path}>
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div> */}
          {/* <ModeToggle /> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
