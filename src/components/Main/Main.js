import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";

import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import SearchResults from "../SearchResults/SearchResults.js";
import About from "../About/About.js";

function Main({
  headerState,
  changeHeaderState,
  onPopupWithFormClick,
  onPopupMenuForPhoneClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="header-search-form-block">
        <Header
          headerState={headerState}
          onPopupWithFormClick={onPopupWithFormClick}
          onPopupMenuForPhoneClick={onPopupMenuForPhoneClick}
        />

        <SearchForm />
      </div>

      <SearchResults>
        <h2 className="search-results__title">Search results</h2>
        <button
          className="search-results__button"
          onClick={() => {
            changeHeaderState("SavedArticles");
            navigate("/news-explorer-frontend/saved-news");
          }}
        >
          Show more
        </button>
      </SearchResults>

      <About />
    </>
  );
}

export default Main;
