import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Home Page</h1>
      </div>

      
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

          <li>
            <Link to="/userAuth">useState without type assertion</Link>
          </li>

          <li>
            <Link to="/userAuth2">useState with type assertion</Link>
          </li>

          <h1>useReducer Hook</h1>

          <li>
            <Link to="/useReducer">Counter using useReducer Hook</Link>
          </li>

          <li>
            <Link to="/useReducer2">Counter2 using useReducer Hook</Link>
          </li>

          <h1>useContext Hook</h1>

          <li>
            <Link to="/useContext">ThemeContext using useContext Hook</Link>
          </li>

          <li>
            <Link to="/useContext2">UserContext using useContext Hook</Link>
          </li>

          <h1>useRef Hook</h1>

          <li>
            <Link to="/useRef">DOMRef using useRef Hook</Link>
          </li>

          <li>
            <Link to="/useRef2">MutableRef using useRef Hook</Link>
          </li>

        </ol>
      </div>
    </>
  );
};

export default Home;
