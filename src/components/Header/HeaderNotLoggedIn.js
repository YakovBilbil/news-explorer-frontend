import menuIconWhite from "../../images/menu-icon-white.png";

function Header({ onPopupWithFormClick, onPopupMenuForPhoneClick }) {
  return (
    <header className="header">
      <div className="header__component header__component_news-explorer header__component_not-logged-in ">
        <p>NewsExplorer</p>
      </div>
      <div className="header__component header__component_home header__component_home_not-logged-in">
        <button className="header__home-button ">Home</button>
      </div>
      <div className="header__component header__component_user header__component_user_not-logged-in">
        <button
          className="header__user-name-button header__user-name-button_not-logged-in"
          onClick={onPopupWithFormClick}
        >
          Sign in
        </button>
      </div>
      <button className="header__menu" onClick={onPopupMenuForPhoneClick}>
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
