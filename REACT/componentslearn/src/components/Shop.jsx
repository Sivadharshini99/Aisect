import React, { useState } from "react";
import ProductItem from "./ProductItem";
//parent component
const Shop = () => {
  let [product, setproduct] = useState({
    name: "iphone",
    price: 2000,
    description: "8gb RAM with 128GB",
  });
  return (
    <div>
      <h1>welcome to my shop</h1>
      <ProductItem product={product} />
    </div>
  );
};

export default Shop;
