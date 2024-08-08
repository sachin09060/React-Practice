import React, { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  onClick: any;
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div className="button-container">
      <button onClick={props.onClick}>{props.label}</button>
    </div>
  );
};

export default Button;
