import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <h1>API examples</h1>
      </div>
      <div className="nav-container">
        <NavLink to={"/"}>GET</NavLink>
      </div>
      <div className="nav-container">
        <NavLink to={"/post"}>POST</NavLink>
      </div>
      <div className="nav-container">
        <NavLink to={"/put"}>PUT</NavLink>
      </div>
      <div className="nav-container">
        <NavLink to={"/delete"}>DELETE</NavLink>
      </div>
      <div className="nav-container">
        <NavLink to={"/pop-up"}>POP-UP</NavLink>
      </div>
    </div>
  );
};

export default Header;
