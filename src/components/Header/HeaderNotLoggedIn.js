function Header() {
  return (
    <header className="header header_not-logged-in">
      <div className="header__component header__component_news-explorer header__component_not-logged-in ">
        <p>NewsExplorer</p>
      </div>
      <div className="header__component header__component_home header__component_home_not-logged-in">
        Home
      </div>
      <div className="header__component header__component_user header__component_user-not-logged-in">
        <p className="header__user-name header__user-name_not-logged-in">
          Sign in
        </p>
      </div>
    </header>
  );
}

export default Header;
