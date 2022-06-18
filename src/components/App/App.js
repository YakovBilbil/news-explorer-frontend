import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Main from "../Main/Main.js";
import HeaderNotLoggedIn from "../Header/HeaderNotLoggedIn";
import Header from "../Header/Header.js";
import HeaderSavedArticles from "../Header/HeaderSavedArticles";
import SearchForm from "../SearchForm/SearchForm.js";
import SearchResults from "../SearchResults/SearchResults.js";
import About from "../About/About.js";
import Footer from "../Footer/Footer.js";
import SavedNewsTitleBlock from "../SavedNewsTitleBlock/SavedNewsTitleBlock";
import Popup from "../Popup/Popup.js";
import PopupWithForm from "../PopupWithForm/PopupWithForm.js";
import PopupMenuForPhone from "../PopupMenuForPhone/PopupMenuForPhone.js";
import Preloader from "../Preloader/Preloader.js";
import PopupRegisterSuccess from "../PopupRegisterSuccess/PopupRegisterSuccess.js";

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
                  <Main />
                  <Footer />
                </>
              }
            />

            <Route
              path="/saved-news"
              element={
                <>
                  <HeaderSavedArticles />
                  <SavedNewsTitleBlock />
                  <SearchResults />
                  <Footer />
                </>
              }
            />
          </Routes>

          {/*<PopupWithForm />*/}

          {/*<PopupMenuForPhone />*/}

          {/*<PopupRegisterSuccess />*/}
        </div>
      </div>
    </>
  );
}

export default App;
