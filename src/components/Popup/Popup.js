import closeIcon from "../../images/close-icon.png";

const Popup = ({ children }) => {
  return (
    <div className="popup">
      <div className="popup__container">
        {children}
        <button type="button" className="popup__close-button">
          <img className="popup__close-icon" src={closeIcon} alt="Close Icon" />
        </button>
      </div>
    </div>
  );
};

export default Popup;
