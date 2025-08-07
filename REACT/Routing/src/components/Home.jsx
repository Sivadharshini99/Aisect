import React from 'react'
import usefetch from './custom_hook/useFetch'

const Home = () => {
  let {products}= usefetch("https://fakestoreapi.com/Products")
 
  return (
    <div>
   <p>Home-Total products={products.length}</p>
    </div>
  )
}

export default Home
