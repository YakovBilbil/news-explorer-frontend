import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import HeaderNotLoggedIn from "../Header/HeaderNotLoggedIn";
import Header from "../Header/Header.js";
import HeaderSavedArticles from "../Header/HeaderSavedArticles";
import SearchForm from "../SearchForm/SearchForm.js";
import SearchResults from "../SearchResults/SearchResults.js";
import About from "../About/About.js";
import Footer from "../Footer/Footer.js";
import SavedNewsTitleBlock from "../SavedNewsTitleBlock/SavedNewsTitleBlock";
import Popup from "../Popup/Popup.js";

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
                  <HeaderSavedArticles />
                  <SavedNewsTitleBlock />
                  <SearchResults>
                    <h2 className="search-results__title">Search results</h2>
                    <button className="search-results__button">
                      Show more
                    </button>
                  </SearchResults>
                  <Footer />

                  <Popup>
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Id incidunt quidem veritat{" "}
                    </div>
                  </Popup>
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
