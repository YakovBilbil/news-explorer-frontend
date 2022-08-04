import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import NewsApi from "../../utils/NewsApi.js";
import MainApi from "../../utils/MainApi.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import Main from "../Main/Main.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SavedNewsTitleBlock from "../SavedNewsTitleBlock/SavedNewsTitleBlock.js";
import SavedArticle from "../SavedArticle/SavedArticle.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import PopupRegisterSuccess from "../PopupRegisterSuccess/PopupRegisterSuccess.js";
import PopupMenuForPhone from "../PopupMenuForPhone/PopupMenuForPhone.js";
import { useFormWithValidation } from "../../hooks/useFormWithValidation/useFormWithValidation.js";
import * as auth from "../../utils/Auth.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import VerifyDeletePopup from "../VerifyDeletePopup/VerifyDeletePopup.js";

function App() {
  const navigate = useNavigate();

  const [isLogInSucceeded, setIsLogInSucceeded] = useState(true);

  const [isAuthLoading, setIsAuthLoading] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [jwt, setJwt] = useState(localStorage.getItem("jwt"));

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [headerState, setHeaderState] = useState(
    `${isLoggedIn ? "LoggedIn" : "NotLoggedIn"}`
  );

  const [savedArticles, setSavedArticles] = useState([]);

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

  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    if (!jwt) return;
    (async function () {
      try {
        const userInfo = await MainApi.getUserInfo();
        setCurrentUser(userInfo);
      } catch (error) {
        console.log("CAUGHT ERROR", error);
      }
    })();
  }, [jwt]);

  const [articles, setArticles] = useState([]);

  const [isSearchResultsOpen, setIsSearchResultsOpen] = useState(false);

  const [quantityOfCardsToDisplay, setQuantityOfCardsToDisplay] = useState(3);

  const [searchResultsError, setSearchResultsError] = useState("");

  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();

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
    setIsAuthLoading(true);
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
      setIsAuthLoading(false);
    } catch (err) {
      setIsEmailAvailable(false);
      console.log(err);
      setIsAuthLoading(false);
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

  function closeAllPopups() {
    setIsPopupMenuForPhoneOpen(false);
    setIsPopupRegisterSuccessOpen(false);
    setIsPopupRegisterFormOpen(false);
    setIsPopupLoginFormOpen(false);
    setIsVerifyDeletePopupOpen(false);
  }

  const handleAuthorizeSubmit = async () => {
    try {
      setIsAuthLoading(true);
      const res = await auth.authorize(values.email, values.password);
      if (res) {
        const userInfo = await MainApi.getUserInfo(res.token);
        setIsLoggedIn(true);
        setJwt(localStorage.getItem("jwt"));
        setCurrentUser(userInfo);
        setSavedArticles(await MainApi.getSavedArticles());
        setHeaderState("LoggedIn");
        closeAllPopups();
        setIsAuthLoading(false);
      }
    } catch (err) {
      console.log(err);
      setIsAuthLoading(false);
      setIsLogInSucceeded(false);
    }
  };

  function signOut() {
    setIsLoggedIn(false);
    setHeaderState("NotLoggedIn");
    navigate("/");
    localStorage.removeItem("jwt");
    setJwt(false);

    setCurrentUser({});
  }

  const handleFlagClick = async (card, isAlreadySaved) => {
    if (isLoggedIn && !isAlreadySaved) {
      try {
        const newSavedArticle = await MainApi.saveArticle({
          keyword: keyword,
          title: card.title,
          text: card.description,
          date: card.publishedAt,
          source: card.source.name,
          link: card.url,
          image: card.urlToImage,
        });
        updateSavedArticles(newSavedArticle);
      } catch (error) {
        console.log("CAUGHT ERROR", error);
      }
    } else {
      const targetCardForDelete = savedArticles.find(
        ({ title }) => title === card.title
      );
      handleTrashClick(targetCardForDelete);
    }
  };

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
                      currentUserName={currentUser.name}
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
                      searchResultsError={searchResultsError}
                      savedArticles={savedArticles}
                      signOut={signOut}
                      handleFlagClick={handleFlagClick}
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
                          currentUserName={currentUser.name}
                          headerState={headerState}
                          changeHeaderState={setHeaderState}
                          onPopupWithFormClick={handlePopupWithFormClick}
                          onPopupMenuForPhoneClick={
                            handlePopupMenuForPhoneClick
                          }
                          signOut={signOut}
                        />
                        <SavedNewsTitleBlock
                          currentUserName={currentUser.name}
                          savedArticles={savedArticles}
                        />
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
                setIsLogInSucceeded(true);
                setIsPopupRegisterFormOpen(false);
                setIsPopupLoginFormOpen(true);
              }}
              isAuthLoading={isAuthLoading}
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
              isAuthLoading={isAuthLoading}
              isLogInSucceeded={isLogInSucceeded}
            />

            <PopupMenuForPhone
              currentUserName={currentUser.name}
              isOpen={isPopupMenuForPhoneOpen}
              onClose={closeAllPopups}
              onPopupWithFormClick={handlePopupWithFormClick}
              headerState={headerState}
              changeHeaderState={setHeaderState}
              signOut={signOut}
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
