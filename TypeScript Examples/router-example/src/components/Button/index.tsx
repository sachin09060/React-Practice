import React from "react";

interface ButtonProps {
  type: any;
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button type={props.type}>{props.label}</button>
    </div>
  );
};

export default Button;
