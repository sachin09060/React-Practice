import React from "react";
import "./Card.css";

interface CardProps {
  id: number;
  name: string;
  age: number;
  address: string;
  phone: string;
  email: string;
  gender: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="cardOuter-container">
      <div className="card-container">
        <div className="card-title">
          <p>Name : {props.name}</p>
        </div>
        <div>
          <div className="card-items">
            <p>User Id : {props.id}</p>
          </div>
          <div className="card-items">
            <p> Age : {props.age}</p>
          </div>
          <div className="card-items">
            <p>Address : {props.address}</p>
          </div>
          <div className="card-items">
            <p>Phone : {props.phone}</p>
          </div>
          <div className="card-items">
            <p>Email : {props.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
