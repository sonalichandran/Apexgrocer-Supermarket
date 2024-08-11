import React, { useRef, useState } from 'react';

const UserDashboard = () => {

  const usernameur=useRef();
  const addressur=useRef();
  const dobur=useRef();
  const phonenumberur=useRef();
  const emailur=useRef();
  

  const handleSaveChanges = () => {
    const updatedUserData = {
      username: usernameur.current.value,
      address: addressur.current.value,
      dob: dobur.current.value,
      phoneNumber: phonenumberur.current.value,
      email: emailur.current.value,
    };

    alert('Changes saved!');
  };

  const handleCancel = () => {

    alert('Changes cancelled!');
  };

  return (
    <>
      <p className="text-center font-bold pt-8 pl-80 text-lg flex">Update Your Profile to Keep Engaged</p>
    <div className="w-screen pt-16 pl-64 flex">
      <div className="w-full max-w-md p-6 shadow-md shadow-slate-400 rounded-md flex-col flex bg-white">
      <p className="text-2xl font-bold mb-6 text-center text-gray-500">User Details</p>
        <div className="mb-4 flex items-center">
          <label className="w-32 text-gray-700">Username</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            ref={usernameur}
         
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="w-32 text-gray-700">Address</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            ref={addressur}
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="w-32 text-gray-700">Date of Birth</label>
          <input
            type="date"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            ref={dobur}
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="w-32 text-gray-700">Phone Number</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            ref={phonenumberur}
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="w-32 text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            ref={emailur}
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleSaveChanges}
            className="mt-4 w-1/2 mr-2 p-2 bg-slate-600 text-white rounded-md"
          >
            Save Changes
          </button>
          <button
            onClick={handleCancel}
            className="mt-4 w-1/2 ml-2 p-2 bg-gray-400 text-white rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIJPaTnmKB5meJwH-FTpp5YeEEkFhvnLuNA&s" alt></img> */}
      <div className="pl-32 gap-3 flex-col flex">

      <p className=" pt-28 flex text-9xl ">🐱</p>
      <p className="text-lg font-bold">Your profile, your preferences,</p>
        <p className="text-lg font-bold"> your perfect shopping experience.</p>
    </div>
      </div>
    </>
  );
};

export default UserDashboard;
