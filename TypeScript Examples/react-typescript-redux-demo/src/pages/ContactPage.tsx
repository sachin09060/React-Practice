import Header from "../components/header";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/action";
import { InitialReduxStateProps } from "../redux/redux.props";
import Button from "../components/button";

const ContactPage = () => {
  const count = useSelector((state: InitialReduxStateProps) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <Header />
      <h1 className="container-heading">Counter: {count}</h1>
      <Button
        onClick={() => dispatch(increment())}
        type={"button"}
        label="Increment"
      />
      <Button
        onClick={() => dispatch(decrement())}
        type={"button"}
        label="Decrement"
      />
      <Button onClick={() => dispatch(reset())} type={"button"} label="Reset" />
    </div>
  );
};

export default ContactPage;
