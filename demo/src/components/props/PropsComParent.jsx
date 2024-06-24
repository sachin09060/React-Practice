import React from "react";
import { PropsCom } from "./PropsCom";
import { useNavigate } from "react-router-dom";

export const PropsComParent = () => {
    const navigate = useNavigate();

    const back = () => {
      navigate("/");
    };
  return (
    <>
    <p>From Parent Props</p>
      <PropsCom name="Sachin" />
      <br />
      <button onClick={back}>Back</button>
    </>
  );
};
