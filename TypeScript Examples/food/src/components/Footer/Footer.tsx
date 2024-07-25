import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-body">
        <div className="footer-heading">
          <h1>Footer Heding</h1>
        </div>
        <div className="footer-details">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
      <div className="social-icons">
        <p>social-icons</p>
        <p>social-icons</p>
        <p>social-icons</p>
      </div>
    </div>
  );
};

export default Footer;
