import { useNavigate } from "react-router-dom";

export const Child = ({onClick}) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    }
    
  return (
    <>
      <p>Child Component</p>
      <button onClick={onClick}>Increment</button>
      <button onClick={handleBack}>Back</button>
    </>
  );
};
