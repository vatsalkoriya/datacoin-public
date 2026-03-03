import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  // --- START OF FIX ---
  // The condition was changed from userInfo.isAdmin to check the user's role.
  // This now correctly checks if the user's role is 'admin'.
  return userInfo && userInfo.role === 'admin' ? <Outlet /> : <Navigate to="/profile" />;
  // --- END OF FIX ---
};

export default AdminRoute;