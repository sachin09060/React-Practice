import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="nav-container">
        <nav className="nav">
          <div className="navlist-container">
            <ul>
              <div className="nav-items">
              <li>
                  <Link className="link-title" to={"/"}>
                    Link 1
                  </Link>
                </li>
                <li>
                  <Link className="link-title" to={"/link2"}>
                    Link 2
                  </Link>
                </li>
                <li>
                  <NavLink className="navlink-title" to={"/navlink"}>NavLink 1</NavLink>
                </li>
                <li>
                  <NavLink className="navlink-title" to={"/navlink2"}>NavLink 2</NavLink>
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
