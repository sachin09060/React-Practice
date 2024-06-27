import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HookTimer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>From "useRef" HookTimer Component!</h1>
      HookTimer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear timer
      </button>
      <br />
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default HookTimer;
