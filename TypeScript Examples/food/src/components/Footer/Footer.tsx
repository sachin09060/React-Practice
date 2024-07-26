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
            and scrambled it to make a type specimen book.
          </p>
        </div>

      </div>

      <div className="social-icons">
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-square-twitter"></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-threads"></i>
      </div>

    </div>
  );
};

export default Footer;
