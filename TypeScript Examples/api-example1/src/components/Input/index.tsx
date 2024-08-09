import React from "react";
import "./Input.css"

interface InputProps {
  label: string;
  type: string;
  placeholder?: string;
  value?: string | number;
  name: string;
  checked?: boolean;
  onChange: (e: any) => any;
}

const Input = (props: InputProps) => {
  const { type, ...rest } = props;
  return (
    <div className="input-container">
      <div className="input-label">
        <label>{props.label}</label>
      </div>
      <div className="input-box-container">
        <input className="input-box" type={props.type} {...rest} required />
      </div>
    </div>
  );
};

export default Input;
