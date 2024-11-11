import FruitList from '@/pages/Web/FruitList';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
 

const Navbar2 = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State to store search term
  const [submittedSearch, setSubmittedSearch] = useState(''); // State to store the submitted search

  const NavLinks = [
    { title: "Fruits", path: "/fruits" },
    { title: "Vegetables", path: "/vegetables" },
    { title: "Fresh Meat", path: "/meat" },
    { title: "Milk Products", path: "/milk" },
    { title: "Grocery", path: "/grocery" }
  ];

  // Handle input change for the search field
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    setSubmittedSearch(searchTerm); // Set the search term on click
  };

  return (
    <>
      <div className="absolute top-20 left-0 w-full h-[7vh] flex flex-row items-center pr-10">
        <div className="flex justify-start pr-40 items-center flex-row">
          <ul className="pl-60 list-none flex gap-8 text-lg font-medium">
            {NavLinks.map((links, index) => (
              <li key={index} className='list-none'>
                <NavLink to={links.path}>{links.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center ml-4">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm} // Bind input value
              onChange={handleSearchChange} // Handle input change
              className="search-input pl-2 h-8 w-60 border border-gray-300 rounded-l text-black"
            />
            <button
              className="search-button h-8 w-16 text-white bg-black rounded-r"
              onClick={handleSearchClick} // Handle search click
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Pass the submitted search term to the FruitList */}
     
    </>
  );
};

export default Navbar2;
