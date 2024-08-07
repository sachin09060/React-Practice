import React from "react";
import "./NavLink2.css";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const ThankYou2 = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/navlink");
  };

  const handleErrorPage = () => {
    navigate("*");
  };

  return (
    <>
      <div className="navlink2-container">
        <div className="navlink2-box">
          <h1 className="navlink2-heading">NavLink Page 2</h1>
          <div className="navlink2-button-container">
            <Button onClick={handleBack} label="Previous page" />
            <Button onClick={handleErrorPage} label="Click here to Errorpage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou2;
