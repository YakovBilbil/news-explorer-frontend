import Card from "../Card/Card.js";

function SearchResults({ children }) {
  return (
    <div className="search-results">
      {children[0]}

      <ul className="search-results__articles-list">
        <Card>
          <div className="card__like-flag"></div>
          <div className="card__button-description">
            Sign in to save articles
          </div>
        </Card>

        <Card>
          <div className="card__delete-trash"></div>
          <div className="card__category">Parks</div>
          <div className="card__button-description">Remove from saved</div>
        </Card>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
      {children[1]}
    </div>
  );
}

export default SearchResults;
