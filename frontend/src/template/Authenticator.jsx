import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import Login from './Login';
import { Outlet } from 'react-router-dom';

const Authenticator = () => {
  const { api, loggedIn } = useContext(AuthContext);

  console.log(loggedIn);

  if (!loggedIn) {
    return <Login />;
  }

  return <Outlet />;
};

export default Authenticator;
