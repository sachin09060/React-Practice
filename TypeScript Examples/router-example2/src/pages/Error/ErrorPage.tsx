import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <>
    <div className="circle"></div>
      <div className="error-container">
        <div className="error-description">
          <h1>Oops! Page not found!</h1>
        </div>
        <div className="error404">
          <h1>404</h1>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
