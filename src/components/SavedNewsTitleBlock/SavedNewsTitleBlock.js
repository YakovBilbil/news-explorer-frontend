import "./saved-news-title-block.css";
import "./__title/saved-news-title-block__title.css";
import "./__description/saved-news-title-block__description.css";
import "./__keywords/saved-news-title-block__keywords.css";

function SavedNewsTitleBlock({ currentUserName, savedArticles }) {
  let sortedCounts;

  if (savedArticles.length > 0) {
    const keywords = savedArticles.map((card) => card.keyword);

    const counts = {};
    keywords.forEach((keyword) => {
      counts[keyword] = counts[keyword] ? (counts[keyword] += 1) : 1;
    });

    sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }
  return (
    <div className="saved-news-title-block">
      <p className="saved-news-title-block__title">Saved articles</p>
      <h2 className="saved-news-title-block__description">
        {`${currentUserName}, you have ${savedArticles.length} saved articles`}
      </h2>
      <p
        className="saved-news-title-block__keywords"
        style={{
          display: `${sortedCounts ? "" : "none"}`,
        }}
      >
        By keywords:{" "}
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          {`${
            sortedCounts
              ? `${`${sortedCounts[0][0]}${
                  sortedCounts.length > 1 ? `, ${sortedCounts[1][0]}` : ""
                }${sortedCounts.length > 2 ? ", and " : ""}${
                  sortedCounts.length === 3 ? sortedCounts[2][0] : ""
                } ${
                  sortedCounts.length > 3
                    ? `${sortedCounts.length - 2} other`
                    : ""
                }`}`
              : ""
          }`}
        </span>
      </p>
    </div>
  );
}

export default SavedNewsTitleBlock;
