import React from "react";
import { UserContext } from "../App";

class Footer extends React.Component{// Inheritance -- to inhert react [using extends keyword]
 render(){//default method to return jsx
    
    console.log(this.props);
    let date=new Date();
   return(
    <footer>
    <h2>Footer</h2>
    <UserContext.Consumer>
     {
      ({user})=>{
          return(
            <h1>{user.uName}-{date.getFullYear()}</h1>
          )
      }
     }
    </UserContext.Consumer>
    </footer>
   )
 }
}
export default Footer;