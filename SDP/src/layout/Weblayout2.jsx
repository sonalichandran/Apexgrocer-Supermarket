
import Nav from '@/components/Web/Navbar2'
import Footer from '@/components/Web/Footer'
import Navbar from '@/components/Web/Navbar'


import React from 'react'
import { Outlet } from 'react-router-dom'
  

const Weblayout2 = () => {
  return (
    <>


    <div className="h-screen w-screen overflow-hidden overflow-y-auto m-0 p-0">
    <Outlet/>
    <Nav/>
    <Navbar className="flex fixed"/>
    <Footer/>
    </div>
    </>

  )
}

export default Weblayout2