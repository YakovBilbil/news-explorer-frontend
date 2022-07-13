import { useState, useEffect, useCallback } from "react";

/*
const isEmail = validator.isEmail("yakov.bilbil@gmail.com");
console.log(isEmail);
*/

import "./popup-with-form.css";
import "./__title/popup-with-form__title.css";
import "./__label/popup-with-form__label.css";
import "./__input/popup-with-form__input.css";
import "./__error-message/popup-with-form__error-message.css";
import "./__error-message/_bad-email/popup-with-form__error-message_bad-email.css";
import "./__send-button/popup-with-form__send-button.css";
import "./__send-button/_disabled/popup-with-form__send-button_disabled.css";
import "./__or-block/popup-with-form__or-block.css";
import "./__or/popup-with-form__or.css";
import "./__or-button/popup-with-form__or-button.css";

import Popup from "../Popup/Popup.js";

function PopupWithForm({
  isOpen,
  onClose,
  onRegister,
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

        <label for="username-input" className="popup-with-form__label">
          Username
        </label>
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

        <div className="popup-with-form__error-message popup-with-form__error-message_bad-email">
          This email is not available
        </div>
        <button
          type="submit"
          className={`popup-with-form__send-button ${
            !isValid ? "popup-with-form__send-button_disabled" : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            onRegister();
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
