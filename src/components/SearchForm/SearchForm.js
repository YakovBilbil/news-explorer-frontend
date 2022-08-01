import React, { useState } from "react";

import "./search-form.css";
import "./__title/search-form__title.css";
import "./__description/search-form__description.css";
import "./__search-field/search-form__search-field.css";
import "./__button/search-form__button.css";
import "./__input/search-form__input.css";

function SearchForm({ onUpdateSearchWord }) {
  const [searchWord, setSearchWord] = useState("");

  function handleSearchWordChange(e) {
    setSearchWord(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateSearchWord(searchWord);
  }

  return (
    <div className="search-form">
      <h2 className="search-form__title">What's going on in the world?</h2>
      <p className="search-form__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>

      <form className="search-form__search-field" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search-article"
          id="search-input"
          placeholder="Search Articles"
          required
          className="search-form__input"
          value={searchWord || ""}
          onChange={handleSearchWordChange}
        />
        <button
          className="search-form__button"
          onMouseEnter={(event) => {
            event.target.style.backgroundColor = "#347EFF";
          }}
          onMouseLeave={(event) => {
            event.target.style.backgroundColor = "#2F71E5";
          }}
          onMouseDown={(event) => {
            event.target.style.backgroundColor = "#2A65CC";
          }}
          onMouseUp={(event) => {
            event.target.style.backgroundColor = "#347EFF";
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
