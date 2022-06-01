import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import HeaderNotLoggedIn from "../Header/HeaderNotLoggedIn";
import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import SearchResults from "../SearchResults/SearchResults.js";
import About from "../About/About.js";
import Footer from "../Footer/Footer.js";

function App() {
  return (
    <>
      <div className="page">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeaderNotLoggedIn />
                  <SearchForm />
                  <SearchResults />
                  <About />
                  <Footer />
                </>
              }
            />{" "}
            <Route path="/saved-news" />{" "}
          </Routes>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default App;
