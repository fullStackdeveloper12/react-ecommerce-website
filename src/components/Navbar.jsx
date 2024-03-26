import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import items from "../Data";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = ({ setData, cart }) => {
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    // console.log("Elements===" + element);
    setData(element);
  };

  return (
    <>
      {location.pathname == "/" ? (
        <>
          <div className="topnav">
            <div className="logo">
              <Link to="/" id="active">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="search-container">
              <form onSubmit={submitHandler}>
                <input
                  type="text"
                  placeholder="Search.."
                  name="search"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>
            </div>
            <div className="crt">
              <Link to="/cart">
                <p>
                  cart
                  <span>
                    <sup>{cart.length}</sup>
                  </span>
                </p>
              </Link>
            </div>
          </div>
          <div className="topnav2">
            <div className="link-cnt">
              <a className="active" href="#" onClick={() => setData(items)}>
                No-Filter
              </a>
            </div>
            <div className="link-cnt">
              <a href="#" onClick={() => filterByCategory("mobiles")}>
                Mobiles
              </a>
            </div>
            <div className="link-cnt">
              <a href="#" onClick={() => filterByCategory("laptops")}>
                Laptops
              </a>
            </div>
            <div className="link-cnt">
              <a href="#" onClick={() => filterByCategory("tablets")}>
                Tablets
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="topnav">
            <div className="logo">
              <Link to="/" id="active">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="search-container">
              <form onSubmit={submitHandler}>
                <input
                  type="text"
                  placeholder="Search.."
                  name="search"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>
            </div>
            <div className="crt">
              <Link to="/cart">
                <p>
                  cart
                  <span>
                    <sup>{cart.length}</sup>
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
