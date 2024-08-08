import React from "react";
import "./NavLink1.css";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/link2");
  };

  const handleNext = () => {
    navigate("/navlink2");
  };
  return (
    <>
      <div className="navlink-container">
        <div className="navlink-box">
          <h1 className="navlink-heading">&lt;NavLink/&gt;</h1>
          <p className="navlink-description">
            <span>Purpose:</span> The `NavLink` component is similar to `Link`,
            but with additional functionality to apply styling or classes to the
            link based on whether it is active or not. This is useful for
            highlighting the current active link in navigation menus.
          </p>
          <p className="navlink-description">
            <span>Usage:</span> Use `NavLink` when you want to dynamically style
            a link based on whether it matches the current route or when you
            want to apply specific styles to active links.
          </p>
          <p className="navlink-btn-description">
            Button component used to navigate to next page by using{" "}
            <span>"useNavigate()"</span> hook.
          </p>
          <div className="navlink-button-container">
            <Button onClick={handleBack} label="Previous page" />
            <Button onClick={handleNext} label="Next page" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
