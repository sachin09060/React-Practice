import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div>Home Page</div>
      <div>
        <ol>
          <h1>Props!</h1>
          <li>
            <Link to="/greet">Greet</Link>
          </li>
          <li>
            <Link to="/person">Person</Link>
          </li>
          <li>
            <Link to="/person-list">Person List</Link>
          </li>
          <li>
            <Link to="/heading">Heading</Link>
          </li>
          <li>
            <Link to="/oscar">Oscar</Link>
          </li>
          <li>
            <Link to="/status">Staus</Link>
          </li>
          <li>
            <Link to="/greet2">Greet2</Link>
          </li>
          <li>
            <Link to="/input-button">Input & Button</Link>
          </li>
          <li>
            <Link to="/props-style">Props style</Link>
          </li>

          <h1>useState Hook</h1>

          <li>
            <Link to="/loggedin">LoggedIn</Link>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Home;
