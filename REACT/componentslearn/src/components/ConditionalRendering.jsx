import React, { useState } from 'react'
import styled from 'styled-components';


const Button=styled.button 
`background-color: blue;
color:white;
width:150px;
height:50px;
`
const ConditionalRendering = () => {
      let [count,setCount]=useState(0);//array.destructing concept
      let [data,setData]=useState("Loading")


       
      let message;
      let remainingClick = 10 - count;
      if (count<10) {
        message=(
          <div>
            <h3>you clicked {count} times </h3>
            <p> still {remainingClick} more times to reach 10% discount </p>
          </div>
        )  
      }
      else if(count===10){
        message=(
          <div>
             <h3>you clicked {count} times </h3>
            <p>you unlocked 10% discount</p>
          </div>
        )
      }
      else if(count<20){
        message=(
          <div>
             <h3>you clicked {count} times </h3>
            <p>you're on the way to get more rewards,click for 20% discount</p>
          </div>
        )
      }
      else {
        message=(
          <div>
             <h3>you clicked {count} times </h3>
            <p>you've reach top rewards, you're a click master</p>
          </div>
        )
      }

            function handleIncrease(){
                     setCount((prevCount)=>{return prevCount+1});      
            }
           
          let dispComp = ()=>{
            switch (data) {
              case "Loading":
                return <LoadingCompo/>
                break;
              case "Success":
                return <SuccessCompo/>
                break;
              case "Failure":
                return <ErrorCompo/>
                break;
            
              default:
                break;
            }
          }  
  return (
    <div>
      <h1>Click to unlock rewards🎉- {count}</h1>
      <Button onClick={handleIncrease}>Click Me!</Button>
      {message}
      {dispComp()}
      {/* Ternary oprator (condition)? : */}
       {/* {count>=10 ? (<p>you unlocked a 10% discount</p> ) : ( <p>click 10 times to unlock reward</p>) } */}

       {/* logical and */}
       {/* {
        count>=20 && <p>you're a click master</p>
       } */}

    </div>
  )
}

export default ConditionalRendering


function LoadingCompo(){
  return(
    <h6>Loading...</h6>
  )
}

function SuccessCompo(){
  return(
    <h6>Success...👍</h6>
  )
}

function ErrorCompo(){
  return(
    <h6>Error...🥲</h6>
  )
}