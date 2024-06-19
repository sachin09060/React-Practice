import Parent from "./Parent";

const GrandParent = () => {
  return (
    <>
      <p>Grand Parent Component</p>
      <Parent />
    </>
  );
};

export default GrandParent;
