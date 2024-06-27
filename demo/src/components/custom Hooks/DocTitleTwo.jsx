import React, { useState } from "react";
import { useDocumentTitle } from "../hooks/UseDocumentTitle";
import { useNavigate } from "react-router-dom";

const DocTitleTwo = () => {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Form Using Custom Hooks - "useDocumentTitle" </h1>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      <br />
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default DocTitleTwo;
