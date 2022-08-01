import "./nothing-found.css";
import "./__picture/nothing-found__picture.css";
import "./__title/nothing-found__title.css";
import "./__description/nothing-found__description.css";
import "../SearchResults/search-results.css";

import NothingFoundIcon from "../../images/nothing-found-icon.svg";

function NothingFound({ searchResultsError }) {
  return (
    <div className="search-results">
      <div className="nothing-found">
        <img
          className="nothing-found__picture"
          src={NothingFoundIcon}
          alt={"Sad Emoji"}
        />
        <h2 className="nothing-found__title">{`${
          searchResultsError === "" ? "Nothing found" : searchResultsError
        }`}</h2>
        <p className="nothing-found__description">
          {`${
            searchResultsError === ""
              ? "Sorry, but nothing matched your search terms."
              : ""
          }`}
        </p>
      </div>
    </div>
  );
}

export default NothingFound;
