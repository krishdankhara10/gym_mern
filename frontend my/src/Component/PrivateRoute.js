import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem('userEmail');
  
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
