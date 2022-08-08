import "../PopupWithForm/__label/popup-with-form__label.css";
import "../PopupWithForm/__input/popup-with-form__input.css";
import "../PopupWithForm/__error-message/popup-with-form__error-message.css";
import "../PopupWithForm/__error-message/_bad-email/popup-with-form__error-message_bad-email.css";

import PopupWithForm from "../PopupWithForm/PopupWithForm.js";

function Register({
  isOpen,
  onClose,
  onRegister,
  handleChange,
  values,
  errors,
  isValid,
  moveToSignInForm,
  isAuthLoading,
  isEmailAvailable,
}) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onRegister}
      isValid={isValid}
      moveToForm={moveToSignInForm}
      isAuthLoading={isAuthLoading}
      name="Sign up"
      contraName="Sign in"
    >
      <label className="popup-with-form__label">Email</label>
      <input
        type="email"
        name="email"
        id="register-email-input"
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
        id="register-password-input"
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
    </PopupWithForm>
  );
}

export default Register;
