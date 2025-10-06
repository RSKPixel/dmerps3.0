import React, { useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';

const Login = () => {
  const { api, loggedIn, setLoggedIn } = useContext(AuthContext);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`${api}/auth/verify`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }, [loggedIn, token]);

  const handleLogin = () => {
    // Implement actual login logic here, e.g., API call to authenticate
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="bg-gray-800 rounded-sm shadow-lg shadow-black/40 w-[400px] border-gray-600 border mt-20">
        <div className="flex flex-row gap-3 w-full ps-4  border-b border-gray-600 bg-gray-950 rounded-t p-1 font-bold">
          <i className="bi bi-lock"></i>DMERP'S User Login
        </div>
        <div className="p-4">
          <label className="block mb-1 font-bold">Username</label>
          <input type="text" />
          <label className="block mb-1 font-bold">Password</label>
          <input type="password" />
          <div className="flex flex-row gap-4 px-4">
            <button className="primary" onClick={handleLogin}>
              Login
            </button>
            <button className="secondary">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
