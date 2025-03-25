import React from "react";

class Footer extends React.Component{// Inheritance -- to inhert react [using extends keyword]
 render(){//default method to return jsx
    
    console.log(this.props);
    
   return(
    <footer>
    <h2>Footer</h2>
    </footer>
   )
 }
}
export default Footer;