import React from "react";
import items from "../Data";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./productdetail.css";
import Product from "./Product";

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterItems = items.filter((itm) => itm.id == id);
    setProduct(filterItems[0]);
    // console.log(filterItems);

    const relatedproduct = items.filter(
      (pro) => pro.category === product.category
    );

    setRelatedProducts(relatedproduct);
    // console.log(relatedproduct);
  }, [id, product.category]);

  return (
    <>
      <div className="flex-box">
        <div className="left">
          <div className="big-img">
            <img src={product.imgSrc} />
          </div>
        </div>

        <div className="right">
          <div className="url">
            <a href={product.amazonLink} style={{ textDecoration: "none" }}>
              Amazon Product Link
            </a>
          </div>
          <div className="pname">{product.title}</div>
          <div className="price">${product.price}</div>
          <div className="quantity">
            <p>Quantity :</p>
            <input type="number" min="1" max="5" value="1" />
          </div>
          <div className="btn-box">
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>

      <h1 className="cta-h1">Related Products</h1>
      <Product cart={cart} setCart={setCart} items={relatedProducts} />
    </>
  );
};

export default ProductDetail;
