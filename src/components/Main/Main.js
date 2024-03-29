import "../HeaderSearchFormBlock/header-search-form-block.css";
import "../SearchResults/__button/search-results__button.css";
import "../SearchResults/__button/_disabled/search-results__button_disabled.css";
import "../SearchResults/__title/search-results__title.css";

import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import SearchResults from "../SearchResults/SearchResults.js";
import About from "../About/About.js";
import Preloader from "../Preloader/Preloader.js";
import NothingFound from "../NothingFound/NothingFound.js";

function Main({
  currentUserName,
  headerState,
  isLoggedIn,
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
  savedArticles,
  signOut,
  handleFlagClick,
}) {
  return (
    <>
      <div className="header-search-form-block">
        <Header
          currentUserName={currentUserName}
          headerState={headerState}
          changeHeaderState={changeHeaderState}
          onPopupWithFormClick={onPopupWithFormClick}
          onPopupMenuForPhoneClick={onPopupMenuForPhoneClick}
          signOut={signOut}
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
          isLoggedIn={isLoggedIn}
          savedArticles={savedArticles}
          handleFlagClick={handleFlagClick}
        >
          <h2 className="search-results__title">Search results</h2>
          <button
            className={`search-results__button ${
              isShowMoreButtonDisabled ? "search-results__button_disabled" : ""
            }`}
            onClick={() => {
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
