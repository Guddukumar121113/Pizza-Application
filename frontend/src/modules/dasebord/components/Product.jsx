import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";

const Product = ({ product }) => {
 const ctx = useContext(CartContext);
  const myStyle = { width: "18rem", backgroundColor: "grey" };
  const addToCart =()=>{
    ctx.addCart({...product})
    console.log('Add to cart call' ,product);
    
  }
  return (
    <div className="card m-2" style={myStyle}>
      <img src={product.image} className="card-img-top" alt="..." />
      {/* <img src={product.assets.menu[0].url} className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="product.price">
          Some quick example text to build on the card 
        </p>
        <h5 className="card-title">{product.price}      OFF35%</h5>
        <button onClick={addToCart} className="btn btn-primary" >Add to Cart </button> 
          
        
      </div>
    </div>
  );
};

export default Product;
