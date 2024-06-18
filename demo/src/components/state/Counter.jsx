import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MyButton() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const navigate = useNavigate();
  const back = () => {
    navigate("/")
  };

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={back}>Back</button>
    </>
  );
}

export default MyButton;
