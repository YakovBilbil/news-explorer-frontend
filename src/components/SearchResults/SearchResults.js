import Card from "../Card/Card.js";
import Preloader from "../Preloader/Preloader.js";
import NothingFound from "../NothingFound/NothingFound.js";

function SearchResults({ children = [] }) {
  return (
    <div className="search-results">
      <Preloader />
      <NothingFound />

      {children[0]}

      <ul
        className="search-results__articles-list"
        style={{ display: "visible" }}
      >
        <Card>
          <button
            className="card__like-flag"
            onClick={(e) => e.target.classList.toggle("card__like-flag_active")}
          ></button>{" "}
          <p className="card__button-description" style={{ display: "none" }}>
            Sign in to save articles
          </p>
        </Card>

        <Card>
          <button className="card__delete-trash"></button>
          <div className="card__category">Parks</div>
          <p className="card__button-description" style={{ display: "none" }}>
            Remove from saved
          </p>
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
