import React from "react";
import Header from "../../components/Header";
import "./Link1.css";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/link2");
  };

  return (
    <>
      <div className="link-container">
        <div className="link-box">
          <h1 className="link-heading">&lt;Link/&gt;</h1>
          <p className="link-description">
            <span>Purpose:</span> The `Link` component is used to navigate
            between different routes in your application. It is a basic
            navigation component that updates the URL without causing a full
            page reload.
          </p>
          <p className="link-description">
            <span>Usage:</span> It is often used when you need to create links
            that change the URL to a new route and want the application to
            navigate to that route.
          </p>
          <p className="link-btn-description">
            Button component used to navigate to next page by using{" "}
            <span>"useNavigate()"</span> hook.
          </p>
          <Button onClick={handleClick} label="Next page" />
        </div>
      </div>
    </>
  );
};

export default FormPage;
