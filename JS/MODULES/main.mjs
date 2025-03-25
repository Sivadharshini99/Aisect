import { newName, num, sum, users } from "./login.mjs";//named export
import multiply from "./signup.mjs";// default export
//import userDetails from "./signup.mjs";// default export

function application(){
    console.log(users);
    // console.log(userDetails);
    console.log(num);
    console.log(newName);
   sum();     
   multiply();  
}
application();