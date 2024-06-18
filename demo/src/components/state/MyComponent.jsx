import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MyComponent() {
  const [name, setName] = useState("User");
  const [age, setAge] = useState(0);

  const handleClick = () => {
    setName("Sachin");
    setAge(24);
  };

  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  return (
    <>
      <h1>
        Hello {name}, your age is {age}
      </h1>
      <button onClick={handleClick}>Click me</button>
      <br />
      <button onClick={back}>Back</button>
      <br />
      <br />
      <p>useState Example, Here We createing name and age states and by clicking button we set the values to those states.</p>
    </>
  );
}

export default MyComponent;
