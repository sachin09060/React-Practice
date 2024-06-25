import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UseRef = () => {
  const [inputValue, setInputValue] = useState("");

  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  }

  return (
    <>
      <input type="text" value={inputValue} onChange={handleChange} />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
      <button onClick={handleBack}>Back</button>
    </>
  );
};
