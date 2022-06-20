import Popup from "../Popup/Popup.js";

function PopupRegisterSuccess({ isOpen, onClose, onPopupWithFormClick }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <h2 className="popup__title">Registration successfully completed!</h2>
      <button
        className="popup__registration-successfully-signin"
        onClick={() => {
          onClose();
          onPopupWithFormClick();
        }}
      >
        Sign in
      </button>
    </Popup>
  );
}

export default PopupRegisterSuccess;
