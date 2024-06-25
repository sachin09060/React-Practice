import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UseMemo = () => {
  const [todos, setTodos] = useState([]);

  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("Calculating........!");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const handleAdd = () => {
    setTodos((item) => [...item, "New Todo!"]);
  };

  const handleIncrement = () => {
    setCount((item) => item + 1);
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <h2>My todos</h2>
        {todos.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
        <button onClick={handleAdd}>Add</button>
      </div>
      <hr />
      <div>
        Count : {count}
        <button onClick={handleIncrement}>Increment</button>
        <h1>Expensive Calculation</h1>
        {calculation}
      </div>
      <button onClick={handleBack}>Back</button>
    </>
  );
};
