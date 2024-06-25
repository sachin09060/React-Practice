import { useContext } from "react";
import { UserContext } from "./Component1";
import { useNavigate } from "react-router-dom";

export const Component5 = () => {
  const { user, handleChange } = useContext(UserContext);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <h1>Component5</h1>
      <h1>{`\"User: ${user}\" Using inside Bottom most Component 5`}</h1>
      <br />
      <button onClick={handleChange}>Change User</button>
      <button onClick={handleBack}>Back</button>
    </>
  );
};
