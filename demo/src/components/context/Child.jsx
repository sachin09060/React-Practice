import { useContext } from "react";
import { CounterContext } from "./CounterProvider";

const Child = () => {
  const { count, increment, decrement, reset } = useContext(CounterContext);

  return (
    <>
      <p>Child Component</p>
      <h1>Count : {count} </h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Child;
