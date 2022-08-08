import "../PopupWithForm/popup-with-form.css";
import "../PopupWithForm/__title/popup-with-form__title.css";
import "../PopupWithForm/__send-button/popup-with-form__send-button.css";
import "../PopupWithForm/__send-button/_disabled/popup-with-form__send-button_disabled.css";
import "../PopupWithForm/__or-block/popup-with-form__or-block.css";
import "../PopupWithForm/__or/popup-with-form__or.css";
import "../PopupWithForm/__or-button/popup-with-form__or-button.css";

import Popup from "../Popup/Popup.js";

function PopupWithForm({
  children,
  isOpen,
  onClose,
  onSubmit,
  isValid,
  moveToForm,
  isAuthLoading,
  name,
  contraName,
}) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <form
        className="popup-with-form"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
      >
        <h2 className="popup-with-form__title">{name}</h2>

        {children}

        <button
          type="submit"
          className={`popup-with-form__send-button ${
            !isValid || isAuthLoading
              ? "popup-with-form__send-button_disabled"
              : ""
          }`}
          disabled={!isValid || isAuthLoading}
        >
          {`${isAuthLoading ? "Loading" : `${name}`}`}
        </button>

        <div className="popup-with-form__or-block">
          <p className="popup-with-form__or">{`${
            isAuthLoading ? "" : "or"
          }`}</p>
          <button
            className="popup-with-form__or-button"
            onClick={moveToForm}
            disabled={isAuthLoading}
          >
            {`${isAuthLoading ? "" : `${contraName}`}`}
          </button>
        </div>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
