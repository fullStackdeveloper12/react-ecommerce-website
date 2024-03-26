import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      {cart.length === 0 ? (
        <>
          <h1 className="headingg">Cart is Empty</h1>
          <Link to="/" className="link-btn">
            <p>Continue Shopping</p>
          </Link>
        </>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart" key={item.id}>
              <div className="cart-items">
                <div className="cart-img">
                  <img src={item.imgSrc} alt="" />
                </div>
                <div className="cart-cnt">
                  <h2>{item.title}</h2>
                  <h3>{item.price}</h3>
                  <p>{item.description}</p>
                  <button className="btn">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
          {cart.length > 0 && (
            <>
              <div className="btns">
                <button className="check">CheckOut</button>
                <button className="clear" onClick={() => setCart([])}>
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Cart;
