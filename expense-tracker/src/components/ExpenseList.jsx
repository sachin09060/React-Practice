import React, { forwardRef, useImperativeHandle, useLayoutEffect, useRef } from 'react';

const ExpenseList = forwardRef(({ expenses, removeExpense }, ref) => {
  const listRef = useRef();

  useImperativeHandle(ref, () => ({
    alertMessage() {
      alert('Expense list updated!');
    }
  }));

  useLayoutEffect(() => {
    console.log('ExpenseList: DOM updated');
  }, [expenses]);

  return (
    <ul ref={listRef}>
      {expenses.map(expense => (
        <li key={expense.id}>
          {expense.description}: ${expense.amount.toFixed(2)}
          <button onClick={() => removeExpense(expense.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
});

export default ExpenseList;
