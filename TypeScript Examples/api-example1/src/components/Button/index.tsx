import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick?: any;
  label: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = (props: ButtonProps) => {
  return (
    <div className="button-container">
      <button onClick={props.onClick} type={props.type}>{props.label}</button>
    </div>
  );
};

export default Button;
