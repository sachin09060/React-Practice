import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DocTitleOne = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Form Using Normal Hook - "useEffect" </h1>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      <br />
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default DocTitleOne;
