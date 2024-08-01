import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="nav-container">
        <nav>
          <div className="navlist-container">
            <ul>
              <div className="nav-items">
                <li>
                  <Link className="link-title" to={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="link-title" to={"/form"}>
                    Form
                  </Link>
                </li>
                <li>
                  <NavLink to={"/thank-you"}>Thank-you</NavLink>
                </li>
                <li>
                  <NavLink to={"/thank-you2"}>Thank-you2</NavLink>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
