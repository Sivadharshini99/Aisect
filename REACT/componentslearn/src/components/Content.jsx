import React from 'react';
import styled from 'styled-components';
import CounterApp from './CounterApp';

//backticks to apply styles (styled--library,button--called from library)
let Button=styled.button 
`background-color: blue;
color:white;
width:100px;
height:50px;
`

let NewButton= styled(Button)`
background-color:red;
box-shadow: 0px 0px 10px black;
`

const Content = () => {
    let pStyle={
        backgroundColor:"purple",
        padding:"3px",
        color:"white"
    }
    function printSomething(e){
      console.log(e.target.innerText);
      
      console.log("hello");     
    }
   
    function printSomething1(event){
      console.log(event.target.innerText); 
      console.log("hello world");
          
    }
   
  return (
    <main>
    <h1 style={{backgroundColor:"green",color:"white"}}>main content</h1>
    {/* <p style={pStyle}>sub content</p> */}
    <Button onClick={printSomething}>Click Me</Button>
    <NewButton onClick={(e)=>{printSomething1(e)}}>Duplicate</NewButton>
    <CounterApp/>   {/*counterapp calling */}
    </main>
  );
};

export default Content;