import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
        <h1>From "useRef" to focus input! </h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default FocusInput;
