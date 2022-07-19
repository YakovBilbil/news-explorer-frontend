import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import * as auth from "../../utils/Auth.js";

const ProtectedRoute = ({ element, isLoggedIn, isSavedArticlesOpen }) => {
  /*
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("isLoggedIn Protected: ", isLoggedIn);

  useEffect(() => {
    if (!jwt) return;
    (async function () {
      try {
        const res = await auth.checkTokenAndGetUserEmail(jwt);
        if (res) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.log("CAUGHT ERROR", error);
      }
    })();
  });

  console.log("isLoggedIn: ", isLoggedIn);
*/
  return isLoggedIn && isSavedArticlesOpen ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
