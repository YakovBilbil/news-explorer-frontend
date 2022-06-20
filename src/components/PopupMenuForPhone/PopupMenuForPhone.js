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
      className={`popup popup_PopupMenuForPhone ${
        isOpen ? "popup_opened" : ""
      }`}
      onClick={handleOverlay}
    >
      <div className="popup__container popup__container_PopupMenuForPhone">
        <header className="header">
          <div className="header__component header__component_news-explorer  ">
            <p>NewsExplorer</p>
          </div>

          <button
            type="button"
            className="popup__close-button popup__close-button_PopupMenuForPhone"
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
          className="PopupMenuForPhone__home"
          onClick={() => {
            navigate("/");
            onClose();
          }}
        >
          Home
        </button>
        <button
          className="PopupMenuForPhone__signin"
          onClick={onPopupWithFormClick}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default PopupMenuForPhone;
