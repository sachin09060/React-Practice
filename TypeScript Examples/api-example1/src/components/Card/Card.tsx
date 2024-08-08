import React from "react";
import "./Card.css";

interface CardProps {
  id: number;
  userId: number;
  title: string;
  status: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="cardOuter-container">
      <div className="card-container">
        <div className="card-id">
          <p>Card Id : {props.id}</p>
        </div>
        <div className="card-userId">
          <p>User Id : {props.userId}</p>
        </div>
        <div className="card-title">
          <p> Title : {props.title}</p>
        </div>
        <div className="card-status">
          <p>Status : {props.status}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
