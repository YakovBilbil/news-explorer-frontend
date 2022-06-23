import NothingFoundIcon from "../../images/nothing-found-icon.png";

function NothingFound() {
  return (
    <>
      <div className="nothing-found" style={{ display: "none" }}>
        <img
          className="nothing-found__picture"
          src={NothingFoundIcon}
          alt={"Sad Emoji"}
        />
        <h2 className="nothing-found__title">Nothing found</h2>
        <p className="nothing-found__description">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    </>
  );
}

export default NothingFound;
