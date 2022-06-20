import React, { useContext, useState } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";
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
import PopupWithForm from "../PopupWithForm/PopupWithForm.js";
import PopupMenuForPhone from "../PopupMenuForPhone/PopupMenuForPhone.js";
import Preloader from "../Preloader/Preloader.js";

function Main({ onPopupWithFormClick, onPopupMenuForPhoneClick }) {
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="header-search-form-block">
        <HeaderNotLoggedIn
          onPopupWithFormClick={onPopupWithFormClick}
          onPopupMenuForPhoneClick={onPopupMenuForPhoneClick}
        />
        {/*<Header />*/}
        <SearchForm />
      </div>

      <SearchResults>
        <h2 className="search-results__title">Search results</h2>
        <button
          className="search-results__button"
          onClick={() => navigate("/saved-news")}
        >
          Show more
        </button>
      </SearchResults>

      <About />
    </>
  );
}

export default Main;
