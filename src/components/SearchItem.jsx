import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import items from "../Data";
import { useState } from "react";
import Product from "./Product";

const SearchItem = ({ cart, setCart }) => {
  const { term } = useParams();
  // console.log(term);

  const [filterdata, setFilterdata] = useState([]);

  useEffect(() => {
    const filtereddata = () => {
      const data = items.filter((pro) =>
        pro.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilterdata(data);
    };

    filtereddata();
  }, [term]);

  return <Product cart={cart} setCart={setCart} items={filterdata} />;
};

export default SearchItem;
