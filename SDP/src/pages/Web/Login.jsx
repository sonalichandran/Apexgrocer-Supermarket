
import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { authService } from '../../services/auth'
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const navigate=useNavigate();
  const usernameur=useRef();
  const passwordur=useRef();
  const checkRedirect = async () => {
    if (authService.getToken() !== null && authService.isLoggedIn()) {
        
        const userRole = authService.getUserRole();
        if (userRole !== null) {
           console.log(userRole);
            if (userRole === "ADMIN") {
          
                navigate('/admin/dashboard');
            } else if (userRole === "USER") {
         
                navigate('/fruits');
            } else {
        
                console.log("Something went wrong");
            }
        }
    }
};

useEffect(() => {
    checkRedirect();
}, []);
  
  const handlelogin=async (e)=>{
    e.preventDefault();
  const signin={
    username:usernameur.current.value,
    password:passwordur.current.value
  }
  const res = await authService.SignIn(signin.username, signin.password);
  if (res.status === 200) {

    toast.success("Login Successful")
       authService.setToken(res.data);
       const userRole = authService.getUserRole();
       console.log(userRole);
       setTimeout(() => {
       
        checkRedirect();

    }, 3000)
  }
}

  return (
    <>
    <div className="flex items-center pl-80 h-screen">
    <Toaster 
        position="top-right" 
        toastOptions={{
          success: {
            duration: 5000, 
          },
          error: {
            duration: 5000, 
          },
        }} 
      />
      <div className="w-full max-w-sm  p-8 rounded-lg shadow-md shadow-white border-2 border-slate-900">
        <h2 className="text-2xl font-bold  mb-6 flex items-center justify-center">Login</h2>
        <form onSubmit={handlelogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-white-100">Username</label>
            <input
              type="text"
              id="username"
              ref={usernameur}
              className="mt-1 block w-full px-3 py-2 border text-black  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-white-700">Password</label>
            <input
              type="password"
              id="password"
              ref={passwordur}
              className="mt-1 block w-full px-3 text-black py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
              placeholder="•••••••• "
              />
          </div>
          <div className="mb-4">
          
          <a href="#" id="forgotPassword">Forgot Password?</a>
          </div>
         <button
            type="submit"
            className="w-full py-2 px-4 bg-slate-400 border border-white text-white font-semibold rounded-md shadow-sm hover:bg-white hover:text-black  focus:ring-2 focus:ring-offset-2 focus:ring-black focus:border-white focus:text-black">
            Login
          </button>

          <div className="mt-4 flex justify-center items-center">
          <p>Don't have an account?<a href="/register" id="registerLink">Create one</a></p>
          
          </div>
        </form>
          {/* <NavLink to="/adminlogin" className="pl-24">Admin Login</NavLink> */}
      </div>
      <img src="https://img.freepik.com/free-psd/3d-illustration-supermarket_23-2150942240.jpg" className="pl-48 h-80" alt></img>
    </div>
    <div>
    
    </div>
    </>
  );
};

export default Login;
