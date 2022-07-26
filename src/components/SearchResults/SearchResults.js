import "./search-results.css";
import "./_not-displayed/search-results_not-displayed.css";
import "./__articles-list/search-results__articles-list.css";
import "../Card/__like-flag/card__like-flag.css";
import "../Card/__like-flag/_active/card__like-flag_active.css";
import "../Card/__delete-trash/card__delete-trash.css";
import "../Card/__category/card__category.css";
import "../Card/__button-description/card__button-description.css";

import Card from "../Card/Card.js";

import NothingFound from "../NothingFound/NothingFound.js";

function SearchResults({
  children = [],
  cardsToDisplay,
  keyword,
  isSearchResultsOpen,
  isLoggedIn,
  updateSavedArticlesStock,
}) {
  return (
    <div
      /*className={`search-results ${
        isSearchResultsOpen ? "" : "search-results_not-displayed "
        }`}*/

      className={`search-results ${
        isSearchResultsOpen ? "" : "search-results_not-displayed "
      }`}
    >
      {children[0]}

      <ul className="search-results__articles-list">
        {cardsToDisplay.map((card) => (
          <Card
            key={card.source.id}
            card={card}
            isLoggedIn={isLoggedIn}
            keyword={keyword}
            updateSavedArticlesStock={updateSavedArticlesStock}

            /*
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onTrashClick={onTrashClick}
            */
          />
        ))}
      </ul>
      {children[1]}
    </div>
  );
}

export default SearchResults;
