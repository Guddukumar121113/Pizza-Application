import React from "react";

const Product = ({ product }) => {
  const myStyle = { width: "18rem", backgroundColor: "grey" };
  return (
    <div className="card me-2" style={myStyle}>
      <img src={product.assets.menu[0].url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="product.price">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default Product;
