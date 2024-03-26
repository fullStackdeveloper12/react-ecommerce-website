import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify"; // Import Bounce from react-toastify

const Product = ({ items, cart, setCart }) => {
  // console.log("Items", items);

  const addtocart = (id, imgSrc, price, description, title) => {
    const obj = {
      id,
      imgSrc,
      price,
      description,
      title,
    };
    setCart([...cart, obj]); // Corrected syntax
    console.log("cart Elements==", cart);
    toast.success("Added Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce, // Use Bounce here
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce} // Use Bounce here
      />
      <section className="card-container">
        {items.map((item) => {
          // console.log("Data====", item);
          return (
            <>
              <section className="card">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="card-img"
                  />
                </Link>
                <div className="card-details">
                  <h3 className="card-title">{item.title}</h3>
                  <section className="card-reviews">
                    <span className="total-reviews"></span>
                  </section>
                  <section className="card-price">
                    <div className="price">
                      <button className="cta-btn">$ {item.price}</button>
                      <button
                        className="cta-btn-alt"
                        onClick={() =>
                          addtocart(
                            item.id,
                            item.imgSrc,
                            item.price,
                            item.description,
                            item.title
                          )
                        }
                      >
                        Add To Cart
                      </button>
                    </div>
                  </section>
                </div>
              </section>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Product;
