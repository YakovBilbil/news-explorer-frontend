import "../Popup/__title/popup__title.css";
import "../Popup/__registration-successfully-signin/popup__registration-successfully-signin.css";
import "../PopupWithForm/__send-button/popup-with-form__send-button.css";
import "./verify-delete-popup.css";
import "../PopupWithForm/__send-button/_verify-delete/popup-with-form__send-button_verify-delete.css";

import Popup from "../Popup/Popup.js";

function VerifyDeletePopup({
  cardForDelete,
  isOpen,
  onClose,
  onConfirmDeleteClick,
}) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="verify-delete-popup">
        <h2 className="popup__title">
          Are you sure you want to delete this article?
        </h2>
        <button
          type="submit"
          className="popup-with-form__send-button popup-with-form__send-button_verify-delete"
          onClick={(event) => {
            event.preventDefault();
            onConfirmDeleteClick(cardForDelete);
          }}
        >
          Delete
        </button>
      </div>
    </Popup>
  );
}

export default VerifyDeletePopup;
