import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UseStateEx2 = () => {
  const [names, setNames] = useState({ fn: "", ln: "" });

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/")
  }

  return (
    <>
      <h2>First Name: {names.fn} </h2>
      <h2>Last Name: {names.ln} </h2>
      <input
        type="text"
        placeholder="Enter First Name"
        onChange={(event) => setNames({ ...names, fn: event.target.value })}
      />
      <input
        type="text"
        placeholder="Enter Last Name"
        onChange={(event) => setNames({ ...names, ln: event.target.value })}
      />
      <br />
      <button onClick={handleBack}>Back</button>
    </>
  );
};
