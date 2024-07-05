import Header from "../../components/header/";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../redux/action";
import { InitialReduxStateProps } from "../../redux/redux.props";
import Button from "../../components/button";

const CounterPage = () => {
  const count = useSelector((state: InitialReduxStateProps) => state.count);
  const dispatch = useDispatch();
  return (
    <>
    <Header />
      <div className="container">
        <h1 className="container-heading">Counter: {count}</h1>
        <Button
          onClick={() => dispatch(increment())}
          type={"button"}
          label="Increment"
          className="button-36"
        />
        <Button
          onClick={() => dispatch(decrement())}
          type={"button"}
          label="Decrement"
          className="button-36"
        />
        <Button
          onClick={() => dispatch(reset())}
          type={"button"}
          label="Reset"
          className="button-36"
        />
      </div>
    </>
  );
};

export default CounterPage;
