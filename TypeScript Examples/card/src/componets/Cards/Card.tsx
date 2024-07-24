import React from "react";
import "./Card.css";
import Button from "../Button/Button";

interface CardProps {
  heading: string;
  description: string;
  src: string;
}

const Card = (props: CardProps) => {

  const handleClick = () => {
  };

  return (
    <>
      <div className="card-continer">
        <div className="card-img">
          <img src={props.src} alt="" />
        </div>
        <div className="card-body">
          <h1 className="card-heading">{props.heading}</h1>
          <p className="card-description">{props.description}</p>
          <Button onClick={handleClick} children="Buy" />
        </div>
      </div>
    </>
  );
};

export default Card;
