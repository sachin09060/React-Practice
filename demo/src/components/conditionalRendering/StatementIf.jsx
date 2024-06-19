import React from "react";

function StatementIf({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <>
        <p>isLoggedIn="true"</p>
        <p>From If-Else Conditional Statement</p>
        <h1>Welcome back!</h1>
      </>
    );
  } else {
    return (
      <>
        <p>isLoggedIn="false"</p>
        <p>From If-Else Conditional Statement</p>;<h1>Please sign in.</h1>
      </>
    );
  }
}

export default StatementIf;
