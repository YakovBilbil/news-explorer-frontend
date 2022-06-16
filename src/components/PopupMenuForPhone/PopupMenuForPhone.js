import closeIcon from "../../images/close-icon.png";

function PopupMenuForPhone() {
  return (
    <div className="popup popup_PopupMenuForPhone">
      <div className="popup__container popup__container_PopupMenuForPhone">
        <header className="header">
          <div className="header__component header__component_news-explorer  ">
            <p>NewsExplorer</p>
          </div>

          <button
            type="button"
            className="popup__close-button popup__close-button_PopupMenuForPhone"
          >
            <img
              className="popup__close-icon"
              src={closeIcon}
              alt="Close Icon"
            />
          </button>
        </header>
        <h2 className="PopupMenuForPhone__home">Home</h2>
        <button className="PopupMenuForPhone__signin">Sign in</button>
      </div>
    </div>
  );
}

export default PopupMenuForPhone;
