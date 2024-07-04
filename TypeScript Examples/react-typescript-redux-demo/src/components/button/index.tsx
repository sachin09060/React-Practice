interface ButtonProps {
  label: string;
  type: "button" | "submit";
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { label, onClick, type } = props;
  return (
    <div>
      <button type={type} onClick={onClick}>
      <div className="btn-lable">{label}</div>
      </button>
    </div>
  );
};

export default Button;
