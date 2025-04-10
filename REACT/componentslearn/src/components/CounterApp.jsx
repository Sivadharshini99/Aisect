import React, { use, useState } from 'react'

const CounterApp = () => {
    // let count=0;
    let [count,setCount]=useState(0);//array.destructing concept
   
    function returnstate(){
        return 100;
    }
    //let[sample,setsample]=useState(returnstate());//no direct fn.call
    // let[sample,setsample]=useState(returnstate);//direct reference call
   // let[sample,setsample]=useState(()=>{return returnstate()});//no direct fn.call// anonymous fn
    let[sample,setsample]=useState(()=>returnstate());//direct reference call - modern js
    function handleIncrease(){
        //setCount(count+1);//calling setCount fn. with args.passed
        setCount((prevCount)=>{return prevCount+1});
        setCount((prevCount)=> prevCount+1);//modern js -->no return keyword +{}
        setCount((prevCount)=> prevCount+1);
        // count +=1; // count=count+1 or count++
        // console.log(count);
        
    }
    function handleDecrease(){
        setCount((prevCount)=>prevCount-1);
        setCount((prevCount)=>prevCount-1);
        setCount((prevCount)=>prevCount-1);
        // count -=1;  // count=count-1 or count--
        // console.log(count);
    }
  return (
    <div>
      <h1>Counter Application - {count} - {sample}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default CounterApp
