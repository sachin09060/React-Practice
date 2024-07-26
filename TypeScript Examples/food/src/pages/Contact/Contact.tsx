import React from "react";
import "./Contact.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact-container">
        <div className="contact-heading">
          <h1>Contact us!</h1>
        </div>

        <div className="contact-body">
          <div className="contact-form">
            <div className="contact-form-heading">
              <h1>Book a Table</h1>
            </div>
            <div className="contact-form-description">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="contact-form-inputs"></div>
            <div className="contact-form-button"></div>
          </div>
          <div className="contact-info">
            <div className="contact-info-sub">
              <h1 className="contact-info-heading">Contact info</h1>
              <p className="contact-info-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="contact-details">
                <p>
                  <i className="fas fa-map-marker-alt"></i> Kuvempunagar Mysore
                  570023
                </p>
                <p>
                  <i className="fa-solid fa-phone"></i> +91 9876543210
                </p>
                <p>
                  <i className="fa-solid fa-envelope-open"></i>{" "}
                  foodcart@email.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
