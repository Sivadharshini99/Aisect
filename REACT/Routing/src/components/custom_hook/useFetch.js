import { useEffect, useState } from "react";
import  axios  from 'axios'; 
function usefetch(url) {
  let [products, setProducts] = useState([]); //data receiving
  let [error, setError] = useState(""); //error handling state-catch block
  let [isLoading, setIsLoading] = useState(true); //pending state

  //async await
  useEffect(() => {
    let fetchapi = async () => {
      try {
        // let response = await fetch(url);
        // if (response.ok) {
            //   let data = await response.json();
            //   setProducts(data);
            // } else {
                //   throw new Error("Data not found");
                // }
    //axios library
       let response = await axios.get(url)
       setProducts(response.data);
       

      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchapi();//fn.call
  }, []);

  return {products,error,isLoading}
}
export default usefetch;
