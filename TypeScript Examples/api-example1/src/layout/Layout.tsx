import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="layoutheader-container">
        <Header />
      </div>
      <div className="outlet-component">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
