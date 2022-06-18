import HeaderNotLoggedIn from "../Header/HeaderNotLoggedIn";
import Header from "../Header/Header.js";
import HeaderSavedArticles from "../Header/HeaderSavedArticles";
import SearchForm from "../SearchForm/SearchForm.js";
import SearchResults from "../SearchResults/SearchResults.js";
import About from "../About/About.js";
import Footer from "../Footer/Footer.js";
import SavedNewsTitleBlock from "../SavedNewsTitleBlock/SavedNewsTitleBlock";
import Popup from "../Popup/Popup.js";
import PopupWithForm from "../PopupWithForm/PopupWithForm.js";
import PopupMenuForPhone from "../PopupMenuForPhone/PopupMenuForPhone.js";
import Preloader from "../Preloader/Preloader.js";

function Main({ children }) {
  return (
    <>
      <div className="header-search-form-block">
        <HeaderNotLoggedIn />
        {/*<Header />*/}
        <SearchForm />
      </div>

      <SearchResults>
        <h2 className="search-results__title">Search results</h2>
        <button className="search-results__button">Show more</button>
      </SearchResults>

      <About />
    </>
  );
}

export default Main;
