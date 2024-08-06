import React from "react";
import Header from "../components/Header";
import { Outlet, useOutlet } from "react-router-dom";
import "./Layout.css";
import Footer from "../components/Footer";

const Layout = () => {
  const outlet = useOutlet();

  return (

    //  using <Outlet /> component
    // <div className="layout-container">
    //   <div>
    //     <Header />
    //   </div>
    //   <div className="outlet-container">
    //     <Outlet />
    //   </div>
    //   <div>
    //     <Footer />
    //   </div>
    // </div>


    // using useOutlet() Hook
    <div className="layout-container">
      <div>
        <Header />
      </div>
      <div className="outlet-container">{outlet}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
