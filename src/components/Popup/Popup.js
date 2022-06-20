import { useEffect } from "react";

import closeIcon from "../../images/close-icon.png";

const Popup = ({ children, isOpen, onClose }) => {
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
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      onClick={handleOverlay}
    >
      <div className="popup__container">
        {children}
        <button type="button" className="popup__close-button" onClick={onClose}>
          <img className="popup__close-icon" src={closeIcon} alt="Close Icon" />
        </button>
      </div>
    </div>
  );
};

export default Popup;
