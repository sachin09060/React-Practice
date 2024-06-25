import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const UseReducerCounter = () => {

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0}
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/")
  }

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <br />
      <button onClick={handleBack}>Back</button>
    </>
  );
};
