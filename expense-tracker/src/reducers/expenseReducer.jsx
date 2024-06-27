
const initialState = {
  expenses: [],
};

const expenseReducer = (state = initialState, action) => {
  switch(action){
    case 'ADD_EXPENSE': return { expenses: [...state.expenses, action.payload]};
    case 'REMOVE_EXPENSE': return { expenses: state.expenses.filter( e => e.id !== action.payload) };
    default: return state;
  }
};

export default expenseReducer;
