const addExpense = (expense) => {
  return {
    type: "ADD_EXPENSE",
    payload: expense,
  };
};

const removeExpense = (expenseId) => {
  return {
    type: "REMOVE_EXPENSE",
    payload: expenseId,
  };
};

export { addExpense, removeExpense };