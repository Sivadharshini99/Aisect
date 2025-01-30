//simple function
function greet(name){
    return"hello"+name+"!";
}
console.log(greet("alice"));
console.log(greet("bob"));
 //variable declaration
var x=10,y=5;
var z=x+y;
console.log(z);

// variable declaration
var data=100;//global variable
function a(){
    var data=200;//local variable
   console.log(data);
}
   function b(){
        console.log(data);      
    }
    a();
    b();

