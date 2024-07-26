import React from "react";
import "./Card.css";
import Button from "../Buttons/Button";

interface CardProps {
  heading: string;
  description: string;
  src: string;
  price: string;
}

const Card = (props: CardProps) => {
  const handleClick = () => {};

  return (
    <>
      <div className="card-continer">
        <div className="card-img">
          <span>
            <h3 className="price">{props.price}</h3>
          </span>
          <img src={props.src} alt="" />
        </div>
        <div className="card-body">
          <h1 className="card-heading">{props.heading}</h1>
          <p className="card-description">{props.description}</p>
          <Button
            onClick={handleClick}
            children={<i className="fa-solid fa-cart-shopping"> Buy</i>}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
