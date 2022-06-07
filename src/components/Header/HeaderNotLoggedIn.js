function Header() {
  return (
    <header className="header">
      <div className="header__component header__component_news-explorer header__component_not-logged-in ">
        <p>NewsExplorer</p>
      </div>
      <div className="header__component header__component_home header__component_home_not-logged-in">
        <button className="header__home-button ">Home</button>
      </div>
      <div className="header__component header__component_user header__component_user-not-logged-in">
        <button className="header__user-name-button header__user-name-button_not-logged-in">
          Sign in
        </button>
      </div>
    </header>
  );
}

export default Header;
