import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, isLoggedIn, isSavedArticlesOpen }) => {
  return isLoggedIn && isSavedArticlesOpen ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
