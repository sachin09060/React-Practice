import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled = false,
  type = "button",
}) => {
  return (
    <div className="button-container">
      <button onClick={onClick} disabled={disabled} type={type}>
        {label}
      </button>
    </div>
  );
};

export default Button;
