import React, { useRef, useState } from "react";

const ExpenseInput = ({ addExpense }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const inputRef = useRef();

  const handleAddExpense = () => {
    if (description && amount) {
      addExpense({ id: Date.now(), description, amount: parseFloat(amount) });
      setDescription("");
      setAmount("");
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Description...."
          ref={inputRef}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Enter amount...."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default ExpenseInput;
