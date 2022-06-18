import Popup from "../Popup/Popup.js";

function PopupRegisterSuccess() {
  return (
    <Popup>
      <h2 className="popup__title">Registration successfully completed!</h2>
      <button className="popup__registration-successfully-signin">
        Sign in
      </button>
    </Popup>
  );
}

export default PopupRegisterSuccess;
