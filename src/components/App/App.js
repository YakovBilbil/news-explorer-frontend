import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import NewsApi from "../../utils/NewsApi.js";
import MainApi from "../../utils/MainApi.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import Main from "../Main/Main.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SavedNewsTitleBlock from "../SavedNewsTitleBlock/SavedNewsTitleBlock.js";
import SavedArticle from "../SavedArticle/SavedArticle.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import PopupRegisterSuccess from "../PopupRegisterSuccess/PopupRegisterSuccess.js";
import PopupMenuForPhone from "../PopupMenuForPhone/PopupMenuForPhone.js";
import { useFormWithValidation } from "../FormValidation/FormValidation.js";
import * as auth from "../../utils/Auth.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import VerifyDeletePopup from "../VerifyDeletePopup/VerifyDeletePopup.js";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const [jwt, setJwt] = useState(localStorage.getItem("jwt"));

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [headerState, setHeaderState] = useState(
    `${isLoggedIn ? "LoggedIn" : "NotLoggedIn"}`
  );
  /*
  function changeHeaderState(state) {
    setHeaderState(state);
  }
  */

  const [savedArticles, setSavedArticles] = useState([]);
  console.log(savedArticles);

  useEffect(() => {
    if (!jwt) return;
    (async function () {
      setJwt(localStorage.getItem("jwt"));
      if (jwt) {
        try {
          const res = await auth.checkTokenAndGetUserEmail(jwt);
          if (res) {
            setIsLoggedIn(true);
            setHeaderState("LoggedIn");
            setSavedArticles(await MainApi.getSavedArticles());
          }
        } catch (error) {
          console.log("CAUGHT ERROR", error);
        }
      }
    })();
  }, [jwt]);

  console.log(savedArticles);

  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    (async function () {
      try {
        const userInfo = await MainApi.getUserInfo();
        setCurrentUser(userInfo);
      } catch (error) {
        console.log("CAUGHT ERROR", error);
      }
    })();
  }, []);

  console.log(currentUser);
  console.log(`Is there JWT? ${jwt ? "Yes" : "No"}`);
  console.log("isLoggedIn: ", isLoggedIn);

  const [articles, setArticles] = useState([]);

  const [isSearchResultsOpen, setIsSearchResultsOpen] = useState(false);

  const [quantityOfCardsToDisplay, setQuantityOfCardsToDisplay] = useState(3);

  const [searchResultsError, setSearchResultsError] = useState("");

  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();

  /*
  useEffect(() => {
    (async function () {
      try {
        const userInfo = await api.getUserInfo();
        setCurrentUser(userInfo);
      } catch (error) {
        console.log("CAUGHT ERROR", error);
      }
    })();
  }, []);
  */

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

  const [keyword, setKeyword] = useState("");

  const handleUpdateSearchWord = (searchWord) => {
    (async function () {
      try {
        setIsLoading(true);
        setSearchResultsError("");
        setIsSearchResultsOpen(true);
        setArticles([]);
        setQuantityOfCardsToDisplay(3);
        const articlesCollectionBySearch =
          await NewsApi.getArticlesBySearchWord(searchWord);
        setArticles(articlesCollectionBySearch.articles);
        setKeyword(searchWord);
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

  console.log(keyword);

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

  //const [headerState, setHeaderState] = useState("NotLoggedIn");

  const [isPopupRegisterFormOpen, setIsPopupRegisterFormOpen] = useState(false);
  function handlePopupWithFormClick() {
    resetForm();
    setIsEmailAvailable(true);
    setIsPopupRegisterFormOpen(true);
  }

  const [isPopupMenuForPhoneOpen, setIsPopupMenuForPhoneOpen] = useState(false);
  function handlePopupMenuForPhoneClick() {
    setIsPopupMenuForPhoneOpen(true);
  }

  const [isEmailAvailable, setIsEmailAvailable] = useState(true);
  const [isPopupRegisterSuccessOpen, setIsPopupRegisterSuccessOpen] =
    useState(false);
  const [isPopupLoginFormOpen, setIsPopupLoginFormOpen] = useState(false);
  const handleRegisterSubmit = async () => {
    try {
      const res = await auth.register(
        values.email,
        values.password,
        values.username
      );
      if (res) {
        setIsPopupRegisterFormOpen(false);
        setIsPopupRegisterSuccessOpen(true);
      }
    } catch (err) {
      setIsEmailAvailable(false);
      console.log(err);
    }
  };

  const handleAuthorizeSubmit = async () => {
    try {
      const res = await auth.authorize(values.email, values.password);
      if (res) {
        const userInfo = await MainApi.getUserInfo();
        setCurrentUser(userInfo);
        setIsLoggedIn(true);
        setIsPopupLoginFormOpen(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  function updateSavedArticles(newSavedArticle) {
    setSavedArticles([newSavedArticle, ...savedArticles]);
  }

  const [cardForDelete, setCardForDelete] = useState({});
  const [isVerifyDeletePopupOpen, setIsVerifyDeletePopupOpen] = useState(false);

  function handleTrashClick(cardForDelete) {
    setIsVerifyDeletePopupOpen(true);
    setCardForDelete(cardForDelete);
  }

  async function handleCardDelete(cardForDelete) {
    try {
      await MainApi.deleteSavedArticle(cardForDelete._id);
      setSavedArticles((savedArticles) =>
        savedArticles.filter((c) => c._id !== cardForDelete._id)
      );
      closeAllPopups();
    } catch (error) {
      console.log("CAUGHT ERROR", error);
    }
  }

  /*
  async function handleCardDelete(cardForDelete) {
    try {
      await api.deleteCard(cardForDelete._id);
      setCards((cards) => cards.filter((c) => c._id !== cardForDelete._id));
      closeAllPopups();
    } catch (error) {
      console.log("CAUGHT ERROR", error);
    }
  }
  */

  function closeAllPopups() {
    setIsPopupMenuForPhoneOpen(false);
    setIsPopupRegisterSuccessOpen(false);
    setIsPopupRegisterFormOpen(false);
    setIsPopupLoginFormOpen(false);
    setIsVerifyDeletePopupOpen(false);
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
                      headerState={headerState}
                      isLoggedIn={isLoggedIn}
                      changeHeaderState={setHeaderState}
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
                      keyword={keyword}
                      searchResultsError={searchResultsError}
                      updateSavedArticles={updateSavedArticles}
                      savedArticles={savedArticles}
                    />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/saved-news"
                element={
                  <ProtectedRoute
                    element={
                      <>
                        <Header
                          headerState={headerState}
                          changeHeaderState={setHeaderState}
                          onPopupWithFormClick={handlePopupWithFormClick}
                          onPopupMenuForPhoneClick={
                            handlePopupMenuForPhoneClick
                          }
                        />
                        <SavedNewsTitleBlock />
                        <ul className="search-results__articles-list">
                          {savedArticles.map((card) => (
                            <SavedArticle
                              key={card._id}
                              card={card}
                              onTrashClick={handleTrashClick}
                            />
                          ))}
                          {}
                        </ul>
                        <Footer />
                      </>
                    }
                    isLoggedIn={isLoggedIn}
                  />
                }
              />

              {/*
              <Route
                path="/signin"
                element={
                  <>
                    <Header
                      headerState={headerState}
                      changeHeaderState={changeHeaderState}
                      onPopupWithFormClick={handlePopupWithFormClick}
                      onPopupMenuForPhoneClick={handlePopupMenuForPhoneClick}
                    />
                    <Login
                      isOpen={isPopupWithFormOpen}
                      onClose={closeAllPopups}
                      onLogin={"handleLoginSubmit"}
                      handleChange={handleChange}
                      values={values}
                      errors={errors}
                      isValid={isValid}
                    />
                    <SavedNewsTitleBlock />
                    <SearchResults />
                    <Footer />


                  </>
                }
              />

*/}
            </Routes>

            <Register
              isOpen={isPopupRegisterFormOpen}
              onClose={closeAllPopups}
              onRegister={handleRegisterSubmit}
              handleChange={handleChange}
              values={values}
              errors={errors}
              isValid={isValid}
              isEmailAvailable={isEmailAvailable}
              moveToSignInForm={() => {
                setIsPopupRegisterFormOpen(false);
                setIsPopupLoginFormOpen(true);
              }}
            />

            <Login
              isOpen={isPopupLoginFormOpen}
              onClose={closeAllPopups}
              onLogin={handleAuthorizeSubmit}
              handleChange={handleChange}
              values={values}
              errors={errors}
              isValid={isValid}
              moveToSignUpForm={() => {
                setIsPopupLoginFormOpen(false);
                setIsPopupRegisterFormOpen(true);
              }}
            />

            <PopupMenuForPhone
              isOpen={isPopupMenuForPhoneOpen}
              onClose={closeAllPopups}
              onPopupWithFormClick={handlePopupWithFormClick}
            />

            <PopupRegisterSuccess
              isOpen={isPopupRegisterSuccessOpen}
              onClose={closeAllPopups}
              onPopupWithFormClick={() => setIsPopupLoginFormOpen(true)}
            />

            <VerifyDeletePopup
              cardForDelete={cardForDelete}
              isOpen={isVerifyDeletePopupOpen}
              onClose={closeAllPopups}
              onConfirmDeleteClick={handleCardDelete}
            />
          </div>
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
