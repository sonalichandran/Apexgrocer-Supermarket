import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar2 = () => {
  const NavLinks = [
    {
      title: "Fruits",
      path: "/fruits"
    },
    {
      title: "Vegetables",
      path: "/vegetables"
    },
    {
      title: "Fresh Meat",
      path: "/meat"
    },
    {
      title: "Milk Products",
      path: "/milk"
    },
    {
      title: "Grocery",
      path: "/grocery"
    }
  ];

  const [selectedLocation, setSelectedLocation] = useState('');
  const locations = [
    { value: 'ariyalur', label: 'Ariyalur' },
{ value: 'chengalpattu', label: 'Chengalpattu' },
{ value: 'chennai', label: 'Chennai' },
{ value: 'coimbatore', label: 'Coimbatore' },
{ value: 'cuddalore', label: 'Cuddalore' },
{ value: 'dharmapuri', label: 'Dharmapuri' },
{ value: 'dindigul', label: 'Dindigul' },
{ value: 'erode', label: 'Erode' },
{ value: 'kallakurichi', label: 'Kallakurichi' },
{ value: 'kanchipuram', label: 'Kanchipuram' },
{ value: 'kanniyakumari', label: 'Kanniyakumari' },
{ value: 'karur', label: 'Karur' },
{ value: 'krishnagiri', label: 'Krishnagiri' },
{ value: 'madurai', label: 'Madurai' },
{ value: 'mayiladuthurai', label: 'Mayiladuthurai' },
{ value: 'nagapattinam', label: 'Nagapattinam' },
{ value: 'namakkal', label: 'Namakkal' },
{ value: 'nilgiris', label: 'Nilgiris' },
{ value: 'perambalur', label: 'Perambalur' },
{ value: 'pudukkottai', label: 'Pudukkottai' },
{ value: 'ramanathapuram', label: 'Ramanathapuram' },
{ value: 'ranipet', label: 'Ranipet' },
{ value: 'salem', label: 'Salem' },
{ value: 'sivagangai', label: 'Sivagangai' },
{ value: 'tenkasi', label: 'Tenkasi' },
{ value: 'thanjavur', label: 'Thanjavur' },
{ value: 'theni', label: 'Theni' },
{ value: 'thoothukudi', label: 'Thoothukudi' },
{ value: 'tiruchirappalli', label: 'Tiruchirappalli' },
{ value: 'tirunelveli', label: 'Tirunelveli' },
{ value: 'tirupattur', label: 'Tirupattur' },
{ value: 'tiruppur', label: 'Tiruppur' },
{ value: 'tiruvallur', label: 'Tiruvallur' },
{ value: 'tiruvannamalai', label: 'Tiruvannamalai' },
{ value: 'tiruvarur', label: 'Tiruvarur' },
{ value: 'vellore', label: 'Vellore' },
{ value: 'viluppuram', label: 'Viluppuram' },
{ value: 'virudhunagar', label: 'Virudhunagar' },

  ];

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <>
      <div className="absolute top-20 left-0 w-full h-[7vh] flex flex-row items-center pr-10">
        <div className="flex justify-start pr-40 items-center flex-row">
          <ul className="pl-60 list-none flex gap-8  text-lg font-medium">
          {NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path}>
                {links.title}
              </NavLink>
            </li>
          ))}
          </ul>
        </div>

        <div className="flex items-center ml-4">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="search-input pl-2 h-8 w-60 border border-gray-300 rounded-l text-black"
            />
            <button className="search-button h-8 w-16 text-white bg-black rounded-r">
              Search
            </button>
          </div>

          <div className="ml-4 relative">
            <select
              value={selectedLocation}
              onChange={handleLocationChange}
              className="h-8 pl-2 pr-8 border border-gray-300 rounded text-black"
            >
              <option value="" disabled>
                Select location...
              </option>
              {locations.map((location) => (
                <option key={location.value} value={location.value}>
                  {location.label}
                </option>
              ))}
            </select>
            {selectedLocation && (
              <span className="absolute right-2 top-2 text-gray-600">
              
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
