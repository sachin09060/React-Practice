import { useNavigate } from "react-router-dom";
import { useCounter } from "../hooks/useCounter";

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(0, 1);

  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  return (
    <>
      <h1>
        From Custom Hook - "useCounter" with initialValue = 0, and value =1
      </h1>
      <h1>Counter : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={back}>Back</button>
    </>
  );
}

export default CounterOne;
