import React from "react";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const navigate = useNavigate();

  const back = () => {
    navigate("/");
  };
  return (
    <div>
      <img
        src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
        alt="sneakers"
      />
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <h4>{props.price}</h4>
      <br />
      <button onClick={back}>Back</button>
    </div>
  );
}

export default Product;