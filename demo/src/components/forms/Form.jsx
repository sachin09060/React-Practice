import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  return (
    <>
    <h1>Normal Form example</h1>
      <form onSubmit={handleSubmit}>
          <input
          placeholder="Enter your name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        <input type="submit" />
      </form>
      <br />
      <button onClick={back}>Back</button>
    </>
  );
}

export default Form;
