import React from "react";
import "./inputField.css";

interface InputFieldProps {
  placeholder: string;
  type?: "text" | "number";
  value: string | number ;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  name: string;
  className: string;
}

const InputField = (props: InputFieldProps) => {
  return (
    <div className={props.className}>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        ref={props.inputRef}
      />
    </div>
  );
};

export default InputField;
