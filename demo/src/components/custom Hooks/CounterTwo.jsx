import { useNavigate } from "react-router-dom";
import { useCounter } from "../hooks/useCounter";

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(10, 100);

  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  return (
    <>
      <h1>
        From Custom Hook - "useCounter" with initialValue = 10, and value =100
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

export default CounterTwo;
