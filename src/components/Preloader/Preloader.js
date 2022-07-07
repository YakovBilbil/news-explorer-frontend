import "./preloader.css";
import "./__content/preloader__content.css";
import "./__text/preloader__text.css";
import "../SearchResults/search-results.css";

function Preloader() {
  return (
    <div className="search-results">
      <div className="preloader">
        <div className="preloader__content"></div>
      </div>
      <p className="preloader__text">Searching for news...</p>
    </div>
  );
}

export default Preloader;
