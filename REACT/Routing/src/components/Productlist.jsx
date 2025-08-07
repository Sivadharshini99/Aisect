import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {OrbitProgress} from 'react-loading-indicators';
import usefetch from "./custom_hook/useFetch";

const Productlist = () => {
  // let [products, setProducts] = useState([]);//data receiving
  // let[error,setError]=useState("")//error handling state-catch block
  // let[isLoading,setIsLoading]=useState(true)//pending state
  // useEffect(() => {
  //   fetch("http://localhost:4000/products", { method: "GET" })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       else{
  //         throw new Error("search proper data")
  //       }
  //     })
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((error)=>{
  //        setError(error.message);   
  //     })
  //     .finally(()=>{
  //       setIsLoading(false)
  //     })
  // }, []);

//CUSTOMHOOK
//  let customHook= usefetch()
//destructure
 let {products,error,isLoading}= usefetch("http://localhost:4000/products")
 


  if(isLoading){
   return(
    <div>
      <center>

     <OrbitProgress color="#30abd6" size="medium" text="Loading..." textColor="#474275" />
      </center>
    </div>
   )
  }
  return (
    <div>
      <h1>product list</h1>
      { products.length !==0 &&(
      <section className="products">
        {products.map((products) => (
          <Card key={products.id} style={{ width: "18rem" }} className="product">
            <center>
              <Card.Img
                variant="top"
                src={products.image}
                style={{ width: "9rem", height: "12rem" }}
              />
            </center>
            <Card.Body>
              <Card.Title>{products.title}</Card.Title>
              <Card.Text style={{ overflow: "scroll", height: "200px" }}>
                {products.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Card.Text>${products.price}</Card.Text>
              <Button variant="primary">Add to cart</Button>
            </Card.Footer>
          </Card>
        ))}
      </section>
      )}
      {
        error && <p>{error}</p>
      }
    </div>
  );
};

export default Productlist;
