import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function UncontrolledComponent() {
  const inputRef = useRef(null);
  const handleSubmit = () => {
    alert(`Name: ${inputRef.current.value}`);
  };

  const navigate = useNavigate();
  const back = () => {
    navigate("/")
  };

  return (
    <>
      <h1>Uncontrolled Component Example</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" ref={inputRef} />
        <button type="submit">Submit</button>
        <br />
        <button onClick={back}>Back</button>
      </form>
    </>
  );
}

export default UncontrolledComponent;
