import {
  useEffect,
  useInsertionEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

export const UseInsertionEffect = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Child />}
      {show && <Child2 />}
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export const Child = () => {
  const [show, setShow] = useState(false);

  useInsertionEffect(function () {
    console.log("[insertion 1]");

    return function () {
      console.log("[destruction 1]");
    };
  });

  useInsertionEffect(function () {
    console.log("[insertion 11]");

    return function () {
      console.log("[destruction 11]");
    };
  });

  useLayoutEffect(function () {
    console.log("[effect 1]");

    return function () {
      console.log("[effect cleanup 1]");
    };
  });

  useLayoutEffect(function () {
    console.log("[effect 11]");

    return function () {
      console.log("[effect cleanup 11]");
    };
  });

  useEffect(function () {
    console.log("[*effect 1]");

    return function () {
      console.log("[*effect cleanup 1]");
    };
  });

  return (
    <div>
      <h2>Child</h2>
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
};

export const Child2 = () => {
  const [show, setShow] = useState(false);

  useInsertionEffect(function () {
    console.log("[insertion 2]");

    return function () {
      console.log("[destruction 2]");
    };
  });

  useLayoutEffect(function () {
    console.log("[effect 2]");

    return function () {
      console.log("[effect cleanup 2]");
    };
  });

  return (
    <div>
      <h2>Child</h2>
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
};
