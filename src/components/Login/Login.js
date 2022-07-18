import "../PopupWithForm/popup-with-form.css";
import "../PopupWithForm/__title/popup-with-form__title.css";
import "../PopupWithForm/__label/popup-with-form__label.css";
import "../PopupWithForm/__input/popup-with-form__input.css";
import "../PopupWithForm/__error-message/popup-with-form__error-message.css";
import "../PopupWithForm/__send-button/popup-with-form__send-button.css";
import "../PopupWithForm/__send-button/_disabled/popup-with-form__send-button_disabled.css";
import "../PopupWithForm/__or-block/popup-with-form__or-block.css";
import "../PopupWithForm/__or/popup-with-form__or.css";
import "../PopupWithForm/__or-button/popup-with-form__or-button.css";

import Popup from "../Popup/Popup.js";

function PopupWithForm({
  isOpen,
  onClose,
  onLogin,
  handleChange,
  values,
  errors,
  isValid,
}) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <form className="popup-with-form">
        <h2 className="popup-with-form__title">Sign in</h2>

        <label for="email-input" className="popup-with-form__label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email-input"
          placeholder="Enter email"
          className="popup-with-form__input"
          noValidate
          required
          onChange={handleChange}
          value={values.email || ""}
        />
        <div className="popup-with-form__error-message">
          {`${errors.email ? errors.email : ""}`}
        </div>

        <label for="password-input" className="popup-with-form__label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password-input"
          placeholder="Enter password"
          className="popup-with-form__input"
          noValidate
          required
          onChange={handleChange}
          value={values.password || ""}
          minLength="8"
          maxLength="30"
        />
        <div className="popup-with-form__error-message">
          {`${errors.password ? errors.password : ""}`}
        </div>

        <button
          type="submit"
          className={`popup-with-form__send-button ${
            !isValid ? "popup-with-form__send-button_disabled" : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            onLogin();
          }}
          disabled={!isValid}
        >
          Sign in
        </button>

        <div className="popup-with-form__or-block">
          <p className="popup-with-form__or">or</p>
          <button className="popup-with-form__or-button">Sign up</button>
        </div>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
