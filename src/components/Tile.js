import React from "react";

const Tile = ({ title, price, brand, discount }) => {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}
    >
      {title && <h4>{title}</h4>}
      {price && <p>Price: ₹{price}</p>}
      {brand && <p>Brand: {brand}</p>}
      {discount && <p>Discount: {discount}</p>}
    </div>
  );
};

export default Tile;
