import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpenseInput from "./ExpenseInput";
import { addExpense, removeExpense } from "../actions/expenseActions";
import ExpenseList from "./ExpenseList";

const ExpenseApp = () => {
  const dispatch = useDispatch();
  const expenses = useSelector(state => state.expenses);
  const expenseListRef = useRef();

  const handleAddExpense = useCallback(
    (expense) => {
      dispatch(addExpense(expense));
      if (expenseListRef.current) {
        expenseListRef.current.alertMessage();
      }
    },
    [dispatch]
  );

  const handleRemoveExpense = useCallback(
    (expenseId) => {
      dispatch(removeExpense(expenseId));
      if (expenseListRef.current) {
        expenseListRef.current.alertMessage();
      }
    },
    [dispatch]
  );

  useEffect(() => {
    console.log('(useEffect) ---------> ExpenseApp component mounted or expenses state updated!');
  }, [expenses]);

  const totalAmount = useMemo(() => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  }, [expenses]);

  return (
    <div>
      <h1>Expense Tracker!</h1>
      <ExpenseInput addExpense={handleAddExpense} />
      <p>Total Amount: ₹{totalAmount}</p>
      <ExpenseList ref={expenseListRef} expenses={expenses} removeExpense={handleRemoveExpense} />
    </div>
  );
};

export default ExpenseApp;
