import React from 'react'
import ProductDetails from './ProductDetails';
//child component
const ProductItem = ({product}) => {
    // console.log(props);
    //first way
    // let {product} =props;
    // console.log(product);
    
    
  return (
    <div>
      <h1>Displaying products items</h1>
      {/* <section>
        <h3>{product.name}</h3>
        <p>{product.price} </p>
        <p>{product.description}</p>
      </section> */}
      <ProductDetails 
         deepName={product.name}
         deepPrice={product.price}
         deepDescription={product.description}
      />
    </div>
  )
}

export default ProductItem
