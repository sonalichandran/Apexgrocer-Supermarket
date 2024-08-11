
import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm bg-black p-8 rounded-lg shadow-md border-4 border-slate-700 ">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white-100">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border text-black  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-white-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 text-black py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
              placeholder="•••••••• "
            />
          </div>
          <div className="mb-4">

          <a href="#" id="forgotPassword">Forgot Password?</a>
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-slate-700 border border-white text-white font-semibold rounded-md shadow-sm hover:bg-white hover:text-black  focus:ring-2 focus:ring-offset-2 focus:ring-black focus:border-white focus:text-black">
            Login
          </button>

          <div className="mt-4 flex justify-center items-center">
          <p>Don't have an account?<a href="register.html" id="registerLink">Create one</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
