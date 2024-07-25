import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="nav-container">
        <nav>
          <div className="navlist-container">
            <ul>
              <div className="nav-items">
                <li>
                  <Link className="link-title" to={"/"}>Home</Link>
                </li>
                <li>
                  <Link className="link-title" to={"/shop"}>Shop</Link>
                </li>
                <li>
                  <Link className="link-title" to={"/about"}>About</Link>
                </li>
                <li>
                  <Link className="link-title" to={"/contact"}>Contact</Link>
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
