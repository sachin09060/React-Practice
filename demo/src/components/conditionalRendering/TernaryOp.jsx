import React from "react";

function TernaryOp({ isLoggedIn }) {
  return (
    <>
      <p>isLoggedIn="true"</p>
      <p>From Ternary Operators Conditional Statement</p>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </>
  );
}

export default TernaryOp;
