import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import arrow from "../../assets/images/arrow.png";
import leaf from "../../assets/images/leaf.png";
import burger from "../../assets/images/burger.png";
import tomato from "../../assets/images/tomato.png";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home-container">
          <Header />
        <div className="left-sidebox">
          <img className="arrow" src={arrow} alt="" />
          <div className="welcome-note">
            <h1>
              Chosing the
              <span>
                <br />
                Best <span className="span-text">Quality Food</span>
              </span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
        <img className="burger" src={burger} alt="" />
        <div className="right-sidebox">
        <img className="tomato" src={tomato} alt="" />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
