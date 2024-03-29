import "../Popup/popup.css";
import "../Popup/_popup-menu-for-phone/popup_popup-menu-for-phone.css";
import "../Popup/__container/popup__container.css";
import "../Popup/__container/_popup-menu-for-phone/popup__container_popup-menu-for-phone.css";
import "../Popup/__close-button/popup__close-button.css";
import "../Popup/__close-button/_popup-menu-for-phone/popup__close-button_popup-menu-for-phone.css";
import "../Popup/__close-icon/popup__close-icon.css";
import "./__home/popup-menu-for-phone__home.css";
import "./__signin/popup-menu-for-phone__signin.css";
import "./__user-greet/popup-menu-for-phone__user-greet.css";
import "../Popup/_opened/popup_opened.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import closeIcon from "../../images/close-icon.svg";

function PopupMenuForPhone({
  currentUserName,
  isOpen,
  onClose,
  onPopupWithFormClick,
  headerState,
  changeHeaderState,
  signOut,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;

    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup popup_popup-menu-for-phone ${
        isOpen ? "popup_opened" : ""
      }`}
      onClick={handleOverlay}
    >
      <div className="popup__container popup__container_popup-menu-for-phone">
        <header className="header">
          <div className="header__component header__component_news-explorer  ">
            <p>NewsExplorer</p>
          </div>

          <button
            type="button"
            className="popup__close-button popup__close-button_popup-menu-for-phone"
            onClick={onClose}
          >
            <img
              className="popup__close-icon"
              src={closeIcon}
              alt="Close Icon"
            />
          </button>
        </header>

        <p
          className="popup-menu-for-phone__user-greet"
          style={{
            display: `${headerState === "NotLoggedIn" ? "none" : ""}`,
          }}
        >{`Hello ${currentUserName}`}</p>

        <button
          className="popup-menu-for-phone__home"
          onClick={() => {
            if (headerState === "SavedArticles") {
              changeHeaderState("LoggedIn");
            }
            navigate("/");
            onClose();
          }}
        >
          Home
        </button>

        <button
          className="popup-menu-for-phone__home"
          style={{
            display: `${headerState === "NotLoggedIn" ? "none" : ""}`,
          }}
          onClick={() => {
            changeHeaderState("SavedArticles");
            navigate("/saved-news");
            onClose();
          }}
        >
          Saved Articles
        </button>

        <button
          className="popup-menu-for-phone__signin"
          style={{
            display: `${headerState === "NotLoggedIn" ? "" : "none"}`,
          }}
          onClick={onPopupWithFormClick}
        >
          Sign in
        </button>

        <button
          className="popup-menu-for-phone__signin"
          style={{
            display: `${headerState === "NotLoggedIn" ? "none" : ""}`,
          }}
          onClick={() => {
            signOut();
            onClose();
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default PopupMenuForPhone;
