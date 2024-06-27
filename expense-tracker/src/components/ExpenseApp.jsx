import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpenseInput from "./ExpenseInput";
import { addExpense, removeExpense } from "../actions/expenseActions";
import ExpenseList from "./ExpenseList";

const ExpenseApp = () => {
  const dispatch = useDispatch();
  const expenses = useSelector(state => state.expenses);

  const handleAddExpense = useCallback(
    (expense) => {
      dispatch(addExpense(expense));
    },
    [dispatch]
  );

  const handleRemoveExpense = useCallback(
    (expenseId) => {
      dispatch(removeExpense(expenseId));
    },
    [dispatch]
  );

  useEffect(() => {
    console.log('App component mounted or expenses changed');
  }, [expenses]);

  const totalAmount = useMemo(() => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  }, [expenses]);

  return (
    <div>
      <h1>Expense Tracker!</h1>
      <ExpenseInput addExpense={handleAddExpense} />
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      <ExpenseList expenses={expenses} removeExpense={handleRemoveExpense} />
    </div>
  );
};

export default ExpenseApp;
