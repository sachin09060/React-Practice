import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ControlledComponent() {
  const [name, setName] = useState();

  const handleSubmit = () => {
    alert(`Name:${name}`);
  };

  const navigate = useNavigate();

  const back = () => {
    navigate("/")
  }

  return (
    <>
      <h1>Controlled Component Example</h1>
      <p></p>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Submit</button>
        <br />
        <button onClick={back}>Back</button>
      </form>
    </>
  );
}

export default ControlledComponent;
