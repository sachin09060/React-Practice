import React, { useState, useTransition } from "react";
import { useNavigate } from "react-router-dom";

export const UseTransition = () => {
  const [name, setName] = useState("");

  const [lists, setLists] = useState([]);

  const [isPending, startTransition] = useTransition();

  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);
    startTransition(() => {
      let dataList = [];
      for (let i = 1; i <= 10000; i++) {
        dataList.push(`Result ${i} for query "${value}"`);
      }
      setLists(dataList);
    });
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>From "useTransition" Component</h1>

      <input type="text" value={name} onChange={handleChange} />

      <br />
      <button onClick={handleBack}>Back</button>
      
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {lists.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
