import "../Popup/popup.css";
import "../Popup/_popup-menu-for-phone/popup_popup-menu-for-phone.css";
import "../Popup/__container/popup__container.css";
import "../Popup/__container/_popup-menu-for-phone/popup__container_popup-menu-for-phone.css";
import "../Popup/__close-button/popup__close-button.css";
import "../Popup/__close-button/_popup-menu-for-phone/popup__close-button_popup-menu-for-phone.css";
import "../Popup/__close-icon/popup__close-icon.css";
import "./__home/popup-menu-for-phone__home.css";
import "./__signin/popup-menu-for-phone__signin.css";
import "../Popup/_opened/popup_opened.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import closeIcon from "../../images/close-icon.png";

function PopupMenuForPhone({ isOpen, onClose, onPopupWithFormClick }) {
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
        <button
          className="popup-menu-for-phone__home"
          onClick={() => {
            navigate("/news-explorer-frontend");
            onClose();
          }}
        >
          Home
        </button>
        <button
          className="popup-menu-for-phone__signin"
          onClick={onPopupWithFormClick}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default PopupMenuForPhone;
