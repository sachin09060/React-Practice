import "./button.css";

interface ButtonProps {
  label: string;
  className?: string;
  type: "button" | "submit";
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  
  const { label, onClick, type, className } = props;

  return (
    <div>
      <button className={className} type={type} onClick={onClick}>
        <div className="btn-lable">{label}</div>
      </button>
    </div>
  );
};

export default Button;
