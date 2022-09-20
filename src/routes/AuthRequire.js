import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthRequire = ({ children }) => {
  const { isInitialized, isAuthenticated } = useAuth();
  const location = useLocation();
  if (!isAuthenticated)
    return <Navigate to="/login" state={{ from: location }} replace />;
  return children;
};

export default AuthRequire;