import React, { forwardRef, useImperativeHandle, useLayoutEffect, useRef } from 'react';

const ExpenseList = forwardRef(({ expenses, removeExpense }, ref) => {
  const listRef = useRef();

  useImperativeHandle(ref, () => ({
    getExpenses() {
      return expenses;
    },
    alertMessage() {
      alert('Expense list updated!');
    }
  }));

  useLayoutEffect(() => {
    console.log('(useLayoutEffect) ------> ExpenseList: DOM updated whenever expenses state updated!');
  }, [expenses]);

  return (
    <ul ref={listRef}>
      {expenses.map(expense => (
        <li key={expense.id}>
          {expense.description}: ₹{expense.amount}
          <button onClick={() => removeExpense(expense.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
});

export default ExpenseList;
