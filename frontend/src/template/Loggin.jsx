import React, { useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';

const Loggin = () => {
  const { api, loggedIn, setLoggedIn } = useContext(AuthContext);

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="bg-gray-800 rounded-sm shadow-lg shadow-black/40 w-[400px] border-gray-600 border mt-20">
        <div className="flex flex-row gap-3 w-full ps-4  border-b border-gray-600 bg-amber-950 rounded-t p-1">
          <i className="bi bi-lock"></i>User Login
        </div>
        <div className="p-4">
          <label className="block mb-1 font-bold">Username</label>
          <input type="text" className="w-full p-1 mb-2 border border-gray-600 rounded-sm" />
          <label className="block mb-1 font-bold">Password</label>
          <input type="password" className="w-full p-1 mb-2 border border-gray-600 rounded-sm" />
          <button className="w-full p-1 mt-2 bg-blue-600 text-white rounded-sm">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Loggin;
