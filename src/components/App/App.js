import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import api from "../../utils/NewsApi.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import Main from "../Main/Main.js";
import Header from "../Header/Header.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Footer from "../Footer/Footer.js";
import SavedNewsTitleBlock from "../SavedNewsTitleBlock/SavedNewsTitleBlock";
import PopupWithForm from "../PopupWithForm/PopupWithForm.js";
import PopupRegisterSuccess from "../PopupRegisterSuccess/PopupRegisterSuccess.js";
import PopupMenuForPhone from "../PopupMenuForPhone/PopupMenuForPhone.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const [articles, setArticles] = useState([]);

  /*
  useEffect(() => {
    (async function () {
      try {
        const newsData = await api.getInitialArticles();
        setArticles(newsData.articles);
      } catch (error) {
        console.log("CAUGHT ERROR", error);
      }
    })();
  }, []);
  */

  const handleUpdateSearchWord = (searchWord) => {
    (async function () {
      try {
        setArticles([]);
        const articlesCollectionBySearch = await api.getArticlesBySearchWord(
          searchWord
        );
        setArticles(articlesCollectionBySearch.articles);
      } catch (error) {
        console.log("CAUGHT ERROR", error);
      }
    })();
  };

  console.log(articles);

  const [headerState, setHeaderState] = useState("NotLoggedIn");
  function changeHeaderState(state) {
    setHeaderState(state);
  }

  const [isPopupWithFormOpen, setIsPopupWithFormOpen] = useState(false);
  function handlePopupWithFormClick() {
    setIsPopupWithFormOpen(true);
  }

  const [isPopupMenuForPhoneOpen, setIsPopupMenuForPhoneOpen] = useState(false);
  function handlePopupMenuForPhoneClick() {
    setIsPopupMenuForPhoneOpen(true);
  }

  const [isPopupRegisterSuccessOpen, setIsPopupRegisterSuccessOpen] =
    useState(false);
  function handleRegisterSuccess() {
    setIsPopupRegisterSuccessOpen(true);
  }

  function closeAllPopups() {
    setIsPopupWithFormOpen(false);
    setIsPopupMenuForPhoneOpen(false);
    setIsPopupRegisterSuccessOpen(false);
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <div className="container">
            <Routes>
              <Route
                path="/news-explorer-frontend"
                element={
                  <>
                    <Main
                      headerState={headerState}
                      changeHeaderState={changeHeaderState}
                      onPopupWithFormClick={handlePopupWithFormClick}
                      onPopupMenuForPhoneClick={handlePopupMenuForPhoneClick}
                      cards={articles}
                      onUpdateSearchWord={handleUpdateSearchWord}
                    />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/news-explorer-frontend/saved-news"
                element={
                  <>
                    <Header
                      headerState={headerState}
                      changeHeaderState={changeHeaderState}
                      onPopupWithFormClick={handlePopupWithFormClick}
                      onPopupMenuForPhoneClick={handlePopupMenuForPhoneClick}
                    />
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
              onRegister={handleRegisterSuccess}
            />

            <PopupMenuForPhone
              isOpen={isPopupMenuForPhoneOpen}
              onClose={closeAllPopups}
              onPopupWithFormClick={handlePopupWithFormClick}
            />

            <PopupRegisterSuccess
              isOpen={isPopupRegisterSuccessOpen}
              onClose={closeAllPopups}
              onPopupWithFormClick={handlePopupWithFormClick}
            />
          </div>
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
