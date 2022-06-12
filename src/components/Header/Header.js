import signOutIconDefault from "../../images/sign-out-default.png";
import menuIconWhite from "../../images/menu-icon-white.png";

function Header() {
  return (
    <header className="header">
      <div className="header__component header__component_news-explorer  ">
        <p>NewsExplorer</p>
      </div>
      <div className="header__component header__component_home">
        <button className="header__home-button">Home</button>
      </div>
      <div className="header__component header__component_saved-articles ">
        <button className="header__saved-articles-button">
          Saved articles
        </button>
      </div>
      <div className="header__component header__component_user ">
        <button className="header__user-name-button">
          Elise
          <img
            className="header__sign-out-icon"
            src={signOutIconDefault}
            alt="Sign out Icon"
          />
        </button>
      </div>
      <button className="header__menu">
        <img
          className="header__menu-icon-white"
          src={menuIconWhite}
          alt="Menu Icon"
        />
      </button>
    </header>
  );
}

export default Header;
