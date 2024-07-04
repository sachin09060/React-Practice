import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar-container">
      <NavLink to="/">HomePage</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Counter</NavLink>
    </nav>
  );
};

export default Header;
