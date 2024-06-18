function ChildComponent(props) {
  return (
    <>
      <h1>Hello I'm {props.name}, and {props.age} years old!</h1>
      <p>Message from Parent: {props.message}</p>
    </>
  );
}

export default ChildComponent;
