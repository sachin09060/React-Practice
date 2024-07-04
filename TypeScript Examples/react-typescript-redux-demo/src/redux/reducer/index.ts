import { InitialReduxStateProps } from "../redux.props";
import { AnyAction } from "redux";

const initialState: InitialReduxStateProps = {
  count: 0,
  action: "",
};


export default function Reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: (state.count = 0) };
    default:
      return state;
  }
}
