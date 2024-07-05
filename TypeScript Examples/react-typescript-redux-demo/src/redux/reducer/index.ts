import { InitialReduxStateProps, Student } from "../redux.props";
import { AnyAction } from "redux";

const initialState: InitialReduxStateProps = {
  count: 0,
  action: "",
  students: [],
};

const reducer = (state: InitialReduxStateProps = initialState, action: AnyAction): InitialReduxStateProps => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    case "ADD_STUDENT":
      const newStudent: Student = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        age: action.payload.age,
        gender: action.payload.gender,
      };
      return { ...state, students: [...state.students, newStudent] };

    case "REMOVE_STUDENT":
      return { ...state, students: state.students.filter(
        (student) => student.id !== action.payload
      ), }
    default:
      return state;
  }
};

export default reducer;
