import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";
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
  const [currentUser, setCurrentUser] = useState({});

  const [isPopupWithFormOpen, setIsPopupWithFormOpen] = useState(false);
  function handlePopupWithFormClick() {
    setIsPopupWithFormOpen(true);
  }

  const [isPopupMenuForPhoneOpen, setIsPopupMenuForPhoneOpen] = useState(false);
  function handlePopupMenuForPhoneClick() {
    setIsPopupMenuForPhoneOpen(true);
  }

  function closeAllPopups() {
    setIsPopupWithFormOpen(false);
    setIsPopupMenuForPhoneOpen(false);
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Main
                      onPopupWithFormClick={handlePopupWithFormClick}
                      onPopupMenuForPhoneClick={handlePopupMenuForPhoneClick}
                    />
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

            <PopupWithForm
              isOpen={isPopupWithFormOpen}
              onClose={closeAllPopups}
            />

            <PopupMenuForPhone
              isOpen={isPopupMenuForPhoneOpen}
              onClose={closeAllPopups}
              onPopupWithFormClick={handlePopupWithFormClick}
            />

            {/*<PopupRegisterSuccess />*/}
          </div>
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
