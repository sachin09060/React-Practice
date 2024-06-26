import { useRef } from "react";
import { CustomInput } from "./CustomInput";
import { useNavigate } from "react-router-dom";

export const UseImperativeHandle = () => {
    const customInputRef = useRef();
  
    const handleClick = () => {
      customInputRef.current.focus();
      alert(customInputRef.current.getValue());
    };
  
    const navigate = useNavigate();
  
    const handleBack = () => {
      navigate("/");
    };
  
    return (
      <div>
        <h1>From "useImperativeHandle" example</h1>
        <CustomInput ref={customInputRef} />
        <br />
        <button onClick={handleClick}>Focus and Show Value</button>
        <br />
        <button onClick={handleBack}>Back</button>
      </div>
    );
  };

// UseImperativeHandle:A ref is created using useRef and passed to the CustomInput component.

// When the button is clicked, the UseImperativeHandle component calls the focus method and the getValue method exposed 
// by the CustomInput component using the ref.
  