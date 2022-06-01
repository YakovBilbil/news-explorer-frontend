import Card from "../Card/Card.js";

function SearchResults() {
  return (
    <div className="search-results">
      <h2 className="search-results__title">Search results</h2>
      <ul className="search-results__articles-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
      <button className="search-results__button">Show more</button>
    </div>
  );
}

export default SearchResults;
