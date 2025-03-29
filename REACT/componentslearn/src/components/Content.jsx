import React from 'react';
import styled from 'styled-components';

const Content = () => {
    let pStyle={
        backgroundColor:"purple",
        padding:"3px",
        color:"white"

    }

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
    
  return (
    <main>
    <h1 style={{backgroundColor:"green",color:"white"}}>main content</h1>
    {/* <p style={pStyle}>sub content</p> */}
    <Button>Click Me</Button>
    <NewButton>Duplicate</NewButton>
    </main>
  );
};

export default Content;