import SimpleComponent from "./SimpleComponent";

const EnhancedComponent = () => {
  return (
    <>
      <p>From Parent Component!</p>
      <SimpleComponent message={"Test message"} />
    </>
  );
};

export default EnhancedComponent;
