import React from "react";
import "./About.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import delivery from "../../assets/images/fast-delivery.png";
import clock from "../../assets/images/clock.png";
import chef from "../../assets/images/chef.png";
import cuisine from "../../assets/images/cuisine.png";
import cococola from "../../assets/images/coco-cola.png";
import doughnut from "../../assets/images/doughnut.png";
import sandwich from "../../assets/images/sandwich.png";

const About = () => {
  return (
    <>
      <Header />
      <img className="coco-cola" src={cococola} alt="" />
      <img className="doughnut" src={doughnut} alt="" />
      <img className="sandwich" src={sandwich} alt="" />
      <div className="about-container">
        <div className="about-heading">
          <h1>About us!</h1>
        </div>
        <div className="about-body">
          <div className="body-inner-container">
            <div className="about-body-heading">
              <h1>Why Choose Us ?</h1>
            </div>
            <div className="about-body-description">
              <div className="about-description-items">
                <i className="delivery">
                  <img src={delivery} alt="" />
                </i>
                <p className="icon-description">24/7 Free Delivery</p>
              </div>
              <div className="about-description-items">
                <i className="clock">
                  <img src={clock} alt="" />
                </i>
                <p className="icon-description">
                  Our Restaurant is Open Around the Clock
                </p>
              </div>
              <div className="about-description-items">
                <i className="chef">
                  <img src={chef} alt="" />
                </i>
                <p className="icon-description">Best Chef</p>
              </div>
              <div className="about-description-items">
                <i className="cuisine">
                  <img src={cuisine} alt="" />
                </i>
                <p className="icon-description">We Have The Freshest Product</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-description">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default About;
