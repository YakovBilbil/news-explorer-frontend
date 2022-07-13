import "../HeaderSearchFormBlock/header-search-form-block.css";
import "../SearchResults/__button/search-results__button.css";
import "../SearchResults/__button/_disabled/search-results__button_disabled.css";
import "../SearchResults/__title/search-results__title.css";

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";

import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import SearchResults from "../SearchResults/SearchResults.js";
import About from "../About/About.js";
import Preloader from "../Preloader/Preloader.js";
import NothingFound from "../NothingFound/NothingFound.js";

function Main({
  headerState,
  changeHeaderState,
  onPopupWithFormClick,

  onPopupMenuForPhoneClick,
  cardsToDisplay,
  onUpdateSearchWord,
  onShowMoreClick,
  quantityOfCardsToDisplay,
  isSearchResultsOpen,
  isShowMoreButtonDisabled,
  isLoading,
  articles,
  searchResultsError,
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

        <SearchForm onUpdateSearchWord={onUpdateSearchWord} />
      </div>

      {isLoading ? (
        <Preloader />
      ) : articles.length === 0 && isSearchResultsOpen ? (
        <NothingFound searchResultsError={searchResultsError} />
      ) : (
        <SearchResults
          cardsToDisplay={cardsToDisplay}
          quantityOfCardsToDisplay={quantityOfCardsToDisplay}
          isSearchResultsOpen={isSearchResultsOpen}
        >
          <h2 className="search-results__title">Search results</h2>
          <button
            className={`search-results__button ${
              isShowMoreButtonDisabled ? "search-results__button_disabled" : ""
            }`}
            onClick={() => {
              /*
              changeHeaderState("SavedArticles");
              navigate("/news-explorer-frontend/saved-news");
               */

              onShowMoreClick();
            }}
            disabled={isShowMoreButtonDisabled}
          >
            Show more
          </button>
        </SearchResults>
      )}

      <About />
    </>
  );
}

export default Main;

/*
if (cards.length <= quantitiOfCardsToDisplay) {make the button gray and not pressable}
*/
