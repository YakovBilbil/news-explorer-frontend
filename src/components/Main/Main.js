import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";

import HeaderNotLoggedIn from "../Header/HeaderNotLoggedIn";
import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import SearchResults from "../SearchResults/SearchResults.js";
import About from "../About/About.js";

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
