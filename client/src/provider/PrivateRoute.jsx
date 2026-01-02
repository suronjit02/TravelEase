import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthProvider";
import LoadingSpiner from "../components/LoadingSpiner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <LoadingSpiner></LoadingSpiner>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return children;
};

export default PrivateRoute;
