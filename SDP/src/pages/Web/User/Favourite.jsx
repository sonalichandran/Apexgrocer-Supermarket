import React from 'react'
import { NavLink } from 'react-router-dom'

const Favourite = () => {
  return (
    <>
    <div className="font-bold font-serif text-lg  justify-center  items-center pt-80 flex flex-col   gap-4 ">🐱Your Favourite is Empty🐱
   <NavLink to="/"> <button className="h-8 w-24  bg-slate-700 border border-black border-2 text-white font-light rounded-md hover:black">Add Now</button></NavLink>
   </div>
    </>
  )
}

export default Favourite