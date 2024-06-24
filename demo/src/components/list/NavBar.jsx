import { useNavigate } from "react-router-dom";

export const ReactList = () => {

  const navigate = useNavigate();

  const back = () => {
    navigate("/");
  };

    let list = [
        "Home", 
        "Counter", 
        "Controlled Component", 
        "Uncontrolled Component", 
        "Parent Component", 
        "MyComponent", 
        "Product", 
        "Conditinal Rendering", 
        "Context", 
        "Props Component"
    ]

    let navList = list.map((item, index) => <li key={index}>{item}</li>);

    return (
    <>
    <h1>List of items!</h1>
      <ul>{navList}</ul>
      <br />
      <button onClick={back}>Back</button>
    </>
  );
};
