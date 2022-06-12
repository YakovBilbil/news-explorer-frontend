import NothingFoundIcon from "../../images/nothing-found-icon.png";

function NothingFound() {
  return (
    <>
      <div className="NothingFound" style={{ display: "none" }}>
        <img
          className="NothingFound__picture"
          src={NothingFoundIcon}
          alt={"Sad Emoji"}
        />
        <h2 className="NothingFound__title">Nothing found</h2>
        <p className="NothingFound__description">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    </>
  );
}

export default NothingFound;
