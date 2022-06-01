function SearchForm() {
  return (
    <div className="search-form">
      <h2 className="search-form__title">What's going on in the world?</h2>
      <p className="search-form__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="search-form__search-field">
        <div className="search-form__input">
          <div>Nature</div>
        </div>
        <button className="search-form__button">Search</button>
      </div>
    </div>
  );
}

export default SearchForm;
