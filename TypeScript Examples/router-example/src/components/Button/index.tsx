import React from "react";
import "./Button.css"

interface ButtonProps {
  type?: any;
  label: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button className="btn-container" type={props.type} onClick={props.onClick} >{props.label}</button>
    </div>
  );
};

export default Button;
