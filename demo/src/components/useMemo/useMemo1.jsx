import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

function UseMemo1() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementOne = () => {
    setCountOne(countOne + 1);
  };

  const incrementTwo = () => {
    setCountTwo(countTwo + 1);
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    console.log("Hitting......!");
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>From Use Memo Component!</h1>
      <div>
        <button onClick={incrementOne}>Count One - {countOne}</button>
        <h1>
          <span>{isEven ? "Even" : "Odd"}</span>
        </h1>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {countTwo}</button>
      </div>
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default UseMemo1;
