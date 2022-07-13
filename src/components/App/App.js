import React, { useState, useEffect, useCallback } from "react";
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
import { useFormWithValidation } from "../FormValidation/FormValidation.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const [articles, setArticles] = useState([]);

  const [isSearchResultsOpen, setIsSearchResultsOpen] = useState(false);

  const [quantityOfCardsToDisplay, setQuantityOfCardsToDisplay] = useState(3);

  const [isLoading, setIsLoading] = useState(false);

  const [searchResultsError, setSearchResultsError] = useState("");

  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();

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

  /*
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({
      ...errors,
      [name]: `${
        target.validity.valid
          ? ""
          : `${`Invalid ${name}${
              target.validity.tooShort ? ". Too short" : ""
            }`}`
      }`,
    });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );
  */

  /*
const handleShowMoreClick = (lengthOfCardsArray) => {
    console.log(lengthOfCardsArray);
    if (lengthOfCardsArray > quantityOfCardsToDisplay) {
      if (quantityOfCardsToDisplay !== 99) {
        setQuantityOfCardsToDisplay(quantityOfCardsToDisplay + 3);
        console.log("quantityOfCardsToDisplay: ", quantityOfCardsToDisplay);
        if (lengthOfCardsArray > quantityOfCardsToDisplay) {
          console.log("There are more cards to display");
        } else {
          console.log("No more cards to display");
        }
      } else {
        setQuantityOfCardsToDisplay(quantityOfCardsToDisplay + 1);
        console.log("quantityOfCardsToDisplay: ", quantityOfCardsToDisplay);
        console.log("No more cards to display");
      }
    } else {
      console.log("quantityOfCardsToDisplay: ", quantityOfCardsToDisplay);
      console.log("No more cards to display");
    }
  };
  */

  const handleUpdateSearchWord = (searchWord) => {
    (async function () {
      try {
        setIsLoading(true);
        setSearchResultsError("");
        setIsSearchResultsOpen(true);
        setArticles([]);
        setQuantityOfCardsToDisplay(3);
        const articlesCollectionBySearch = await api.getArticlesBySearchWord(
          searchWord
        );
        setArticles(articlesCollectionBySearch.articles);
        setIsLoading(false);
      } catch (error) {
        console.log("CAUGHT ERROR", error);
        setSearchResultsError(
          "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
        );
        setIsLoading(false);
      }
    })();
  };

  let isShowMoreButtonDisabled = false;
  const cardsToDisplay = articles.map((object) => object);
  if (articles.length > quantityOfCardsToDisplay) {
    cardsToDisplay.length = quantityOfCardsToDisplay;
  } else {
    isShowMoreButtonDisabled = true;
  }

  const handleShowMoreClick = () => {
    if (quantityOfCardsToDisplay !== 99) {
      setQuantityOfCardsToDisplay(quantityOfCardsToDisplay + 3);
    } else {
      setQuantityOfCardsToDisplay(quantityOfCardsToDisplay + 1);
    }
  };

  const [headerState, setHeaderState] = useState("NotLoggedIn");
  function changeHeaderState(state) {
    setHeaderState(state);
  }

  const [isPopupWithFormOpen, setIsPopupWithFormOpen] = useState(false);
  function handlePopupWithFormClick() {
    resetForm();
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
                      cardsToDisplay={cardsToDisplay}
                      onUpdateSearchWord={handleUpdateSearchWord}
                      onShowMoreClick={handleShowMoreClick}
                      quantityOfCardsToDisplay={quantityOfCardsToDisplay}
                      isSearchResultsOpen={isSearchResultsOpen}
                      isShowMoreButtonDisabled={isShowMoreButtonDisabled}
                      isLoading={isLoading}
                      articles={articles}
                      searchResultsError={searchResultsError}
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
              handleChange={handleChange}
              values={values}
              errors={errors}
              isValid={isValid}
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
