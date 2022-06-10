import signOutSavedArticlesIcon from "../../images/sign-out-saved-articles.png";

function Header() {
  return (
    <header className="header header_saved-articles">
      <div className="header__component header__component_news-explorer  ">
        <p>NewsExplorer</p>
      </div>
      <div className="header__component header__component_home header__component_home-saved-articles">
        <button className="header__home-button header__home-button_saved-articles">
          Home
        </button>
      </div>
      <div className="header__component header__component_saved-articles header__component_saved-articles-saved-news ">
        <button className="header__saved-articles-button header__saved-articles-button_saved-articles">
          Saved articles
        </button>
      </div>
      <div className="header__component header__component_user ">
        <button className="header__user-name-button header__user-name-button_saved-articles">
          Elise
          <img
            className="header__sign-out-icon"
            src={signOutSavedArticlesIcon}
            alt="Sign out Icon"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;