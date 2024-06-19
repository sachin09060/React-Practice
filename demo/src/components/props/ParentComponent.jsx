import { useNavigate } from "react-router-dom";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const message = "Message from Parent Component";

  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  return (
    <>
      <p>
        Props example, here We render Child Component inside parent component
        and passing props from parent to Child.
      </p>
      <ChildComponent message={message} name="Sachin" age="24" />
      <br />
      <button onClick={back}>Back</button>
    </>
  );
}

export default ParentComponent;
