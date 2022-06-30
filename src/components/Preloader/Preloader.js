import "./preloader.css";
import "./__content/preloader__content.css";
import "./__text/preloader__text.css";

function Preloader() {
  return (
    <>
      <div className="preloader" style={{ display: "none" }}>
        <div className="preloader__content"></div>
      </div>
      <p className="preloader__text" style={{ display: "none" }}>
        Searching for news...
      </p>
    </>
  );
}

export default Preloader;
