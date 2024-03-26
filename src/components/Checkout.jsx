import React from "react";
import "./checkout.css"; // Assuming you have a checkout stylesheet

const Checkout = ({ cart }) => {
  // Function to calculate total price
  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += parseInt(item.price);
    });
    return total;
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-heading">Checkout</h1>
      <div className="checkout-items">
        {cart.map((item) => (
          <div className="checkout-item" key={item.id}>
            <div className="checkout-img">
              <img src={item.imgSrc} alt={item.title} />
            </div>
            <div className="checkout-details">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <h3>${item.price}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="checkout-total">
        <h2>Total:</h2>
        <h2>${calculateTotal()}</h2>
      </div>
      <div className="checkout-buttons">
        <button className="checkout-btn">Place Order</button>
       
      </div>
    </div>
  );
};

export default Checkout;
