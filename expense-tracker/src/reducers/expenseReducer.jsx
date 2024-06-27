
const initialState = {
  expenses: [],
};

const expenseReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE': return { expenses: [...state.expenses, action.payload]};
    case 'REMOVE_EXPENSE': return { expenses: state.expenses.filter( expense => expense.id !== action.payload) };
    default: return state;
  }
};

export default expenseReducer;
