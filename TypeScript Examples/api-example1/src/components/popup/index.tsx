import Button from "../Button";
import "./Popup.css";


const PopupComp = () => {
  const handleHide = () => {
    window.close();
  }
  return (
    <div className="popup-container">
      <p>This is a simple popup!</p>
      <div className="popup-container">
      <Button onClick={handleHide} label="Close" />
    </div>
    </div>
  );
};

export default PopupComp;
