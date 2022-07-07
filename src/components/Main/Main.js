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
  isShowMoreButtonDisabledSecondIndicator,
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

      <SearchResults
        cardsToDisplay={cardsToDisplay}
        quantityOfCardsToDisplay={quantityOfCardsToDisplay}
        isSearchResultsOpen={isSearchResultsOpen}
      >
        <h2 className="search-results__title">Search results</h2>
        <button
          className={`search-results__button ${
            isShowMoreButtonDisabled || isShowMoreButtonDisabledSecondIndicator
              ? "search-results__button_disabled"
              : ""
          }`}
          onClick={() => {
            /*
            changeHeaderState("SavedArticles");
            navigate("/news-explorer-frontend/saved-news");
             */

            onShowMoreClick();
          }}
          disabled={
            isShowMoreButtonDisabled || isShowMoreButtonDisabledSecondIndicator
          }
        >
          Show more
        </button>
      </SearchResults>

      <About />
    </>
  );
}

export default Main;

/*
if (cards.length <= quantitiOfCardsToDisplay) {make the button gray and not pressable}
*/
