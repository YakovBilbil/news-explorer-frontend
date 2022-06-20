function Preloader() {
  return (
    <>
      <div className="Preloader" style={{ display: "none" }}>
        <div className="Preloader__content"></div>
      </div>
      <p className="Preloader__text" style={{ display: "none" }}>
        Searching for news...
      </p>
    </>
  );
}

export default Preloader;
