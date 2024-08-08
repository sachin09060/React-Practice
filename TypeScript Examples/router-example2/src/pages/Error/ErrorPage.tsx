import React from "react";
import "./ErrorPage.css";
import img404 from "../../assets/404.jpg";

const ErrorPage = () => {
  return (
    <>
      <div className="error-container">
        <h1>Oops! Page not found!</h1>
        <div className="error404">
          <img src={img404} alt="" />
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
