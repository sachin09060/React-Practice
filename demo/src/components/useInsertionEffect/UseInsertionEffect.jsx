import {
  useInsertionEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { Child } from "./Child";
import { Child2 } from "./Child2";

export const UseInsertionEffect = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Parent</h1>
      <h3>From "useInsertionEffect" Hook Component!</h3>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Child />}
      {show && <Child2 />}
      <button onClick={handleBack}>Back</button>
    </div>
  );
};
