import Popup from "../Popup/Popup.js";

function PopupWithForm({ isOpen, onClose, onRegister }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <form className="PopupWithForm">
        <h2 className="PopupWithForm__title">Sign in</h2>

        <label for="email-input" className="PopupWithForm__label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email-input"
          placeholder="Enter email"
          className="PopupWithForm__input"
          required
        />
        <div className="PopupWithForm__error-message">
          Invalid email address
        </div>

        <label for="password-input" className="PopupWithForm__label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password-input"
          placeholder="Enter password"
          className="PopupWithForm__input"
          required
        />
        <div className="PopupWithForm__error-message">Invalid password</div>

        <label for="username-input" className="PopupWithForm__label">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username-input"
          placeholder="Enter your username"
          className="PopupWithForm__input"
          required
        />
        <div className="PopupWithForm__error-message">Invalid username</div>

        <div className="PopupWithForm__error-message PopupWithForm__error-message_bad-email">
          This email is not available
        </div>
        <button
          type="submit"
          className="PopupWithForm__send-button"
          onClick={(event) => {
            event.preventDefault();
            onRegister();
          }}
        >
          Sign in
        </button>

        <div className="PopupWithForm__or-block">
          <p className="PopupWithForm__or">or</p>
          <button className="PopupWithForm__or-button">Sign up</button>
        </div>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
