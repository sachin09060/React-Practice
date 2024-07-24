import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="Header-container text-white flex flex-row justify-center space-x-8 items-center h-6 w-dvw bg-[#17153B]">
      <div>
        <NavLink className="nav-items" to="/">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink className="nav-items" to="/grid1">
          Grid1
        </NavLink>
      </div>
      <div>
        <NavLink className="nav-items" to="/grid2">
          Grid2
        </NavLink>
      </div>
      <div>
        <NavLink className="nav-items" to="/flex1">
          Flex1
        </NavLink>
      </div>
      <div>
        <NavLink className="nav-items" to="/gridandflex1">
          Grid & Flex
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
