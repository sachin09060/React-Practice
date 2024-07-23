import React from "react";
import { useNavigate } from "react-router-dom";

const NormalScreen = () => {
  const navigate = useNavigate();

  const aa = () => {
    navigate("/popup");
    console.log("From Normal window");
  };

  const bb = () => {
    window.open("/popup", "_blank", "width=350,height=250");
    console.log("From Popup window");
  };

  return (
    <div>
      <h1>Nornaml Screen</h1>
      <p>Message from normal window !</p>
      <button onClick={() => bb()}>Open Popup</button>
      <button onClick={() => aa()}>Open Normal</button>
    </div>
  );
};

export default NormalScreen;
