import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, isLoggedIn, isSavedArticlesOpen }) => {
  return isLoggedIn ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
