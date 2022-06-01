import signOutIcon from "../../images/sign-out.png";

function Header() {
  return (
    <header className="header">
      <div className="header__component header__component_news-explorer  ">
        <p>NewsExplorer</p>
      </div>
      <div className="header__component header__component_home ">Home</div>
      <div className="header__component header__component_saved-articles ">
        <p>Saved articles</p>
      </div>
      <div className="header__component header__component_user ">
        <p className="header__user-name">
          Elise
          <img
            className="header__sign-out-icon"
            src={signOutIcon}
            alt="Sign out Icon"
          />
        </p>
      </div>
    </header>
  );
}

export default Header;
