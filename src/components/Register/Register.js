import "../PopupWithForm/popup-with-form.css";
import "../PopupWithForm/__title/popup-with-form__title.css";
import "../PopupWithForm/__label/popup-with-form__label.css";
import "../PopupWithForm/__input/popup-with-form__input.css";
import "../PopupWithForm/__error-message/popup-with-form__error-message.css";
import "../PopupWithForm/__error-message/_bad-email/popup-with-form__error-message_bad-email.css";
import "../PopupWithForm/__send-button/popup-with-form__send-button.css";
import "../PopupWithForm/__send-button/_disabled/popup-with-form__send-button_disabled.css";
import "../PopupWithForm/__or-block/popup-with-form__or-block.css";
import "../PopupWithForm/__or/popup-with-form__or.css";
import "../PopupWithForm/__or-button/popup-with-form__or-button.css";

import Popup from "../Popup/Popup.js";

function PopupWithForm({
  isOpen,
  onClose,
  onRegister,
  handleChange,
  values,
  errors,
  isValid,
  isEmailAvailable,
  moveToSignInForm,
  isAuthLoading,
}) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <form
        className="popup-with-form"
        onSubmit={(event) => {
          event.preventDefault();
          onRegister();
        }}
      >
        <h2 className="popup-with-form__title">Sign up</h2>

        <label className="popup-with-form__label">Email</label>
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

        <label className="popup-with-form__label">Password</label>
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

        <label className="popup-with-form__label">Username</label>
        <input
          type="text"
          name="username"
          id="username-input"
          placeholder="Enter your username"
          className="popup-with-form__input"
          minLength="2"
          maxLength="30"
          noValidate
          required
          onChange={handleChange}
          value={values.username || ""}
        />
        <div className="popup-with-form__error-message">
          {`${errors.username ? errors.username : ""}`}
        </div>

        <div
          className="popup-with-form__error-message popup-with-form__error-message_bad-email"
          style={{
            display: `${!isEmailAvailable ? "" : "none"}`,
          }}
        >
          This email is not available
        </div>
        <button
          type="submit"
          className={`popup-with-form__send-button ${
            !isValid || isAuthLoading
              ? "popup-with-form__send-button_disabled"
              : ""
          }`}
          disabled={!isValid || isAuthLoading}
        >
          {`${isAuthLoading ? "Loading" : "Sign up"}`}
        </button>

        <div className="popup-with-form__or-block">
          <p className="popup-with-form__or">{`${
            isAuthLoading ? "" : "or"
          }`}</p>
          <button
            className="popup-with-form__or-button"
            onClick={moveToSignInForm}
            disabled={isAuthLoading}
          >
            {`${isAuthLoading ? "" : "Sign in"}`}
          </button>
        </div>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
