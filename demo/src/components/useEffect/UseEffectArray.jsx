import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UseEffectArray = () => {
  const [val1, setValue1] = useState("");
  const [val2, setValue2] = useState("");

  const handleFirst = (event) => {
    setValue1(event.target.value);
  };

  const handleSecond = (event) => {
    setValue2(event.target.value);
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    console.log(`First ${val1}`);
  }, [val1]);

  useEffect(() => {
    console.log(`Second ${val2}`);
  }, [val2]);

  return (
    <>
      <input
        type="text"
        placeholder="Enter First Value"
        onChange={(handleFirst)}
      />

      <input
        type="text"
        placeholder="Enter Second Value"
        onChange={handleSecond}
      />

      <br />

      <button onClick={handleBack}>Back</button>
    </>
  );
};
