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
// function assignGrade(mark){
//     if(mark>=90)
//         console.log("grade A:" + mark);
//     else if(mark>=80)
//         console.log("grade B" + mark);
//     else if(mark>=70)
//         console.log("grade c" + mark);
//     else
//     console.log("grade F" + mark)
// }
// let mark=parseInt(prompt("enter your mark:"));
// assignGrade(mark);


//switch 
var grade="B";
var result;
switch(grade){
    case 'A':
        result="A Grade";
        break;
    case 'B':
        result="B Grade";
        break;
    case 'C':
        result="C Grade";
        break;
    default:
        result="No Grade";
}
console.log(result);

//sample question 2=>to display day from week by numbers 
var num=7;
var day;
switch(num){
    case 1:
        day="Monday";
        break;
    case 2 :
        day="Tuesday";
        break;
    case 3:
        day="Wednesday";
        break;
    case 4:
        day="Thrusday";
        break;
    case 5:
        day="Friday";
        break;
    case 6:
        day="Saturday";
        break;
    case 7:
        day="Sunday";
        break;
        default:
            day="Invalid day"
}
console.log(day);

//for-loop
for(i=1;i<=5;i++){
    console.log(i);
}
// to display numbers from 10 to 1
for(j=10;j>=1;j--){
    console.log(j);
}

//while-loop
var k=11;
while(k<=15){
    console.log(k);
    k++;
}
//STRING REVERSAL
let str="mango";//input string
let reversedStr="";//to store the reversed string
let l=str.length-1;//start from last character

while(l >=0){
    reversedStr+=str[l];//add the character to the reversed string
    l--;//decrease the index
}
console.log(reversedStr);
//PALINDROME-MADAM(SAME BACKWARD&fORWARD )
let str2="madam";//input string
let reversedStr2="";//to store the reversed string
let m=str2.length-1;//start from last character

while(m >=0){
    reversedStr2+=str2[m];//add the character to the reversed string
    m--;//decrease the index
}
console.log(reversedStr2);

//do-while
var i=21;
do{
    console.log(i);
    i++;
}
while(i<=25);

//for-in loop
const person={
    name:"John",
    age:30,
    country:"USA"
};

let result2="";
for(let key in person){
    result2 +=key +":" + person[key] + "\n" ;
}
console.log(result2);

//IIFE
(function (){
    console.log("function runs immediately");
})

();

//fun
function multiply(l,m){
    return l*m;
}

let res6=multiply(7,8);
console.log(res6);

//fahrenheit to celsius
function tocelsius(f){
    return(5/9)*(f-32);
} 
let celsius=tocelsius(80);
console.log("celsius:" + celsius);
//another way
function tocelsius(f){
    return (f-32)/1.8;
} 
let celsius2=tocelsius(90);
console.log("celsius:" + celsius2);
//BMI
function tobmi(){
    return (weight)/(height*height);
} 
let weight=52;
let height=1.47;
let bmi=tobmi();
console.log("bmi is:" + bmi);

//global variable
var P=10;
var q=20;

function funcA(){
    console.log(P);
}
function funcB(){
    console.log(q);
}

funcA();//FN.CALL
funcB();//FN.CALL

//LOCAL VARIABLE
var P1=10;
var q1=20;

function funcC(){
    var P3=30;
    console.log(P3);
}
function funcD(){
    var q2=40;
    console.log(q2);
}

funcC();//FN.CALL
funcD();//FN.CALL
