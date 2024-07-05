import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css"

const Header = () => {
  return (
    <nav className="navbar-container">
      <NavLink className="nav-items" to="/">Student Registration</NavLink>
      <NavLink className="nav-items" to="/about">About</NavLink>
      <NavLink className="nav-items" to="/counter">Counter</NavLink>
    </nav>
  );
};

export default Header;
