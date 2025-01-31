//simple function
function greet(name){
    return"hello"+name+"!";
}
console.log(greet("alice"));
console.log(greet("bob"));
 //variable declaration
var x=10,y=5;
var z=x+y;
console.log(z)

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

//sample prgm in if stmt
var ab=20;
if(ab>10)
    console.log("ab is greater than 10");
//sample prgm in if-else stmt
var bc=20;
if(bc%2==0)
    console.log("bc is even number");
else
console.log("bc is even number")
//sample prgm in if-else-if stmt
var cd=20;
if(cd==10)
    console.log("cd is equal to 10");
else if(cd==15)
    console.log("cd is equal to 15");
else if(cd==20)
    console.log("cd is equal to 20");
else
console.log("cd is not equal to 10,15,20")
//sample question in if-else-if stmt
function assignGrade(mark){
    if(mark>=90)
        console.log("grade A:" + mark);
    else if(mark>=80)
        console.log("grade B" + mark);
    else if(mark>=70)
        console.log("grade c" + mark);
    else
    console.log("grade F" + mark)
}
let mark=parseInt(prompt("enter your mark:"));
assignGrade(mark);


