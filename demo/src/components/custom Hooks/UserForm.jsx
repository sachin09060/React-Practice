import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";

const UserForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");

  const [lastName, bindLastName, resetLastName] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName} !`);
    resetFirstName();
    resetLastName();
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/ ");
  };

  return (
    <div>
      <h1>Form Using Custom Hook - "useInput" </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" {...bindLastName} />
        </div>
        <button type="submit">Submit</button>
      </form>

      <br />
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default UserForm;
