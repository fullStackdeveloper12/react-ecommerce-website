import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import items from "./Data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SearchItem from "./components/SearchItem";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const App = () => {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([...items]);

  return (
    <>
      <Router>
        <Navbar setData={setData} cart={cart} />
        <Routes>
          <Route
            path="/"
            element={<Product items={data} cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail cart={cart} setCart={setCart} />}
          />
          <Route
            path="/search/:term"
            element={<SearchItem cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
