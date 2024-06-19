function SwitchCase({ isLoggedIn }) {
  switch (isLoggedIn) {
    case true:
      return (
        <>
        <p>isLoggedIn="true"</p>
        <p>From Switch Case Conditional Statement</p>
          <h1>Welcome back!</h1>
        </>
      );
    case false:
      return (
        <>
        <p>isLoggedIn="false"</p>
        <p>From Switch Case Conditional Statement</p>
          <h1>Please sign in.</h1>
        </>
      );
    default:
      return (
        <>
          <h1>Who are you?</h1>
        </>
      );
  }
}

export default SwitchCase;
