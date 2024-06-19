function LogicalOP({ isLoggedIn }) {
    return (
      <>
        <p>isLoggedIn="true"</p>
        <p>From Logical Operators Conditional Statement</p>
        {isLoggedIn && <h1>Welcome back!</h1>}
        {!isLoggedIn && <h1>Please sign in.</h1>}
      </>
    );
  }

  export default LogicalOP;