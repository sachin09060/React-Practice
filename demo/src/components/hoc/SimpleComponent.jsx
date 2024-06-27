import React from "react";
import { useNavigate } from "react-router-dom";

const SimpleComponent = (props) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <p>From Child component!</p>
      <h1>Props Message: {props.message}</h1>
      <button onClick={handleBack}>Back</button>
    </>
  );
};

export default SimpleComponent;
