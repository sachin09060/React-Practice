import React from "react";

function Product(props) {
  return (
    <div>
      <img
        src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
        alt="sneakers"
      />
      <h4>{props.name}</h4>
      <p>Non-Slip Fitness Leisure Running Sneakers</p>
      <h4>{props.price}</h4>
    </div>
  );
}

export default Product;