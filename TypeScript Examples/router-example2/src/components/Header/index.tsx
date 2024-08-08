import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="list-items">
        <Link className="link-title" to={"/"}>
          Link 1
        </Link>
      </div>
      <div className="list-items">
        <Link className="link-title" to={"/link2"}>
          Link 2
        </Link>
      </div>
      <div className="list-items">
        <NavLink className="navlink-title" to={"/navlink"}>
          NavLink 1
        </NavLink>
      </div>
      <div className="list-items">
        <NavLink className="navlink-title" to={"/navlink2"}>
          NavLink 2
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
