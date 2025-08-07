import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Products = () => {
  //state
  // let[count,setCount]=useState(0);
  // let[count1,setCount1]=useState(0);
  //1.only callback fn
  // useEffect(()=>{
  //   console.log("effect will render 1st time-initial render and also whenever component re-renders");   
  // })
  //2.callbackfn+dependency(empty arraty-[])
  // useEffect(()=>{
  //   console.log("effect will render only 1st time component renders");   
  // },[])
  //3.callbackfn+dependency state(empty arraty-[state])
  // useEffect(()=>{
  //   console.log("effect will render only when dependency changes");   
  // },[count1])
  return (
    <div>
      {/* <p>Products - {count}-{count1}</p>
      <Button variant="primary" onClick={()=>setCount(count+1)}>Increase</Button>
      <Button variant="primary" onClick={()=>setCount1(count1+1)}>Increase1</Button>
      <Link to="list">List</Link>
      <Link to="details">Details</Link> */}
      <Outlet/>
      {/* tell router where to render */}
    </div>
  )
}

export default Products
