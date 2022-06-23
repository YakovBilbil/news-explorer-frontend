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
