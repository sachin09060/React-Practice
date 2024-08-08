import React from "react";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const { type, ...rest } = props;
  return (
    <div className="input-container">
      <label>{props.label}</label>
      <input type={props.type} {...rest} />
    </div>
  );
};

export default Input;
