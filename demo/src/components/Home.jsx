import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Welcome to Homepage!</h1>
      <ol>
        <li>
          <Link to="/counter"> Counter </Link>
        </li>
        <li>
          <Link to="/form"> Form </Link>
        </li>
        <li>
          <Link to="/controlledComponent"> Controlled Component </Link>
        </li>
        <li>
          <Link to="/uncontrolledComponent"> Uncontrolled Component </Link>
        </li>
        <li>
          <Link to="/parentComponent"> Parent Component </Link>
        </li>
        <li>
          <Link to="/myComponent"> MyComponent </Link>
        </li>
        <li>
          <Link to="/product"> Product </Link>
        </li>
        <li>
          <Link to="/condtional_rendering"> Conditinal Rendering </Link>
        </li>
        <li>
          <Link to="/context"> Context </Link>
        </li>
      </ol>
    </>
  );
}

export default Home;
