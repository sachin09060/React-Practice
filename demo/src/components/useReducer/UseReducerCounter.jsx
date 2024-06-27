import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      throw state;
  }
};

export const UseReducerCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <br />
      <button onClick={handleBack}>Back</button>
    </>
  );
};
