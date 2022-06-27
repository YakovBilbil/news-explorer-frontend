import "./saved-news-title-block.css";
import "./__title/saved-news-title-block__title.css";
import "./__description/saved-news-title-block__description.css";
import "./__keywords/saved-news-title-block__keywords.css";

function SavedNewsTitleBlock() {
  return (
    <div className="saved-news-title-block">
      <p className="saved-news-title-block__title">Saved articles</p>
      <h2 className="saved-news-title-block__description">
        Elise, you have 5 saved articles
      </h2>
      <p className="saved-news-title-block__keywords">
        By keywords: <b>Nature, Yellowstone, and 2 other</b>
      </p>
    </div>
  );
}

export default SavedNewsTitleBlock;
