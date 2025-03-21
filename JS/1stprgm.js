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

//AGE CALCULATOR
function toAge(){
    return (presentyear)-(birthyear);
}
let presentyear=2025;
let birthyear=1999;
let age=toAge();
console.log(" your age is: " + age);

//CLOSURE-an inner function can access variables from outer function
function outerFunction(){
    var outerVar=" i'm outer function";//outer variables
    function innerFunction(){
        console.log(outerVar);//inner function accessing outer variable
    }
    return innerFunction;//returning inner function
}
var closureFunc=outerFunction();//calling outer function and storing inner function
closureFunc();//calling the returned inner function

//closure with private variables -cannot access variables from outer function
function counter(){
    var count=0;//private variable
    return function(){
        count++;
        console.log("count:",count);
    };
}

var increment=counter();
increment();
increment();
increment();

//closures in function factory
function multiplier(factor){
    return function(number){
        return number * factor;

    };
}
var double=multiplier(2);
var triple=multiplier(3);
console.log(double(5));
console.log(triple(5));

//ANONYMOUS FUNCTION-fn is assigned and called by using a variable name
const greet2=function(name){
    return "hello " + name + "!";
}
console.log(greet2("karthi"));

//IIFE- immediately invoked function
(function(){
    console.log("function runs immediately");
})
();//fn.call

//ANONYMOUS FUNCTION AS CALLBACK
setTimeout(function(){
    console.log("executed after 2 seconds");
},2000)//2000-MILLISECONDS

//  ARROW FUNCTIONS
const sum=(a,b)=> a+b;
console.log(sum(5,3));

//celsius to fahrenheit using anonymous function
const toFahrenheit=function(celsius){
    return (celsius * 9/5)+32;
};
console.log(toFahrenheit(30));
console.log(toFahrenheit(100));

//USER SETTING PRGM
(function(){
    const userSettings={
        theme:"dark",
        language:"English"
    };
    console.log("User settings initialized",userSettings);
})
();//FN.CALL

//FILTERING PRODUCTS--ANONYMOUS FN. AS CALLBACK FUNCTION
const products=[
    {name:"Laptop",price:1000},
    {name:"Phone",price:500},
    {name:"Headphones",price:100},
    {name:"Monitor",price:300}
];

const affordableProducts=products.filter(function(product)
{
    return product.price > 500;
});                                           
console.log(affordableProducts);

//SORTING SCORES(Descending order)--Arrow function
const scores=[45,67,89,90,98];
scores.sort((a,b)=>b-a);
console.log(scores);

//  OBJECT
let person2={
    name:"siva",age:26,city:"chennai",
    greet:function(){
        console.log("hello,my name is:" + this.name);
    }
};
person2.greet();//objectname.functionname=>to call both
console.log(person2);//OBJECT CALLING--->to call all properties in an object

let person3={
    firstName:"siva",
    lastName:"satha",
    age:30,
    isStudent:true,
    hobbies:["reading","Music"],
    address:{
        street:"123 new york",
        city:"chennai",
        zip:"10001"
    },
    fullName:function(){
        return this.firstName + " " +this.lastName;
       // console.log(this.firstName + " " +this.lastName);
    }
};
console.log(person3);
person3.fullName();

//modifying object properties
let person4={
        name:"siva",
        age:30,
        city:"new york"
};
//Displaying original  object properties
console.log(person4.name + person4.age + person4.city);

//modifying object properties
person4.name="kaviya";
person4.age=26;
person4.city="chennai"

//adding a new property
person4.country="India";

//displaying modifying objects
setTimeout(function(){
    console.log(person4.name + person4.age + person4.city + person4.country);
},2000)//2000-MILLISECONDS

//LOOPING THROUGH AN OBJECT
//creating an object
let student={
    name:"siva",
    age:20,
    course:"CS",
    grade:"A"
};
//displaying original object properties using for...in loop
let outputText="Student Details:"

for(let key in student){
    outputText+= key + ":" + student[key] + " ";
}
//display result
console.log(outputText);

//----------------------------------------------------------------------------------------------------------------------------------------

//JAVASCRIPT PROBLEMS
//1.PRINTING NUM 1 TO 100 , INCREMENT BY 1 IN EACH ITERATION - FOR LOOP 
/*var prompt = require('prompt-sync')();
var n1 = prompt( "please enter valid input" );
var m1 = prompt(' please enter valid input ');
for(let i=n1; i<=m1; i++){
    console.log(i);
}*/

//2.an ATM repeadtely asks for valid withdrawal amount until user enters valid amount -WHILE LOOP
/*var prompt = require('prompt-sync')();
let balance=500;
let withdrawal = parseInt(prompt( "Enter withdrawal amount" ));

while(withdrawal > balance || withdrawal <= 0){
    console.log("Invalid amount!, Enter a valid withdrawal amount");
    withdrawal = parseInt(prompt( "Enter withdrawal amount" ));
}
console.log("Transaction successful! you withdraw $" + withdrawal); */

//----------------------------------------------------------------------------------------------------------------------------------------

//CONSTRUCTOR - TO CREATE MULTIPLE OBJECTS OF SAME TYPE
 function Car(brand,model,year){
    this.brand=brand;
    this.model=model;
    this.year=year;
 }
 let car1=new Car("Toyota","camry",2022);
 let car2=new Car("Honda","civic",2023);
 console.log("Car 1:"  + car1.brand + " " + car1.model + "( "+ car1.year + ") " );
 console.log("Car 2:"  + car1.brand + " " + car2.model + "( "+ car2.year + ") " );
 //console.log(car1.brand );

 //PROPERTY DEFAULT VALUE ---> if age is not provided, it defaults to 23 , if its is provided it takes provided value
function Person(name,age=23){
    this.name=name;
    this.age=age;
};
let person5=new Person("Alice");
let person6=new Person("BOB",45);
person6.grade="A"; // adding new property to a constructor
console.log(person5.name + "is" + person5.age + "years old.");
console.log(person6.name + "is" + person6.age + "years old" + "grade:" +  person6.grade);

//CONSTRUCTOR FUNCTION METHODS--->methods inside constructors
function Person(name,age){
    this.name=name;
    this.age=age;
    this.greet=function(){ //methods inside constructors
        return "Hello my name is: " +this.name;
    };
}
let person7=new Person("Siva",23);
console.log(person7.greet());//Method calling

//ADDING METHOD TO AN OBJECT
let person8 ={name:"siva",age:25};
person8.sayHello=function(){ // objectname.methodname
    return "Hi,i'm "+ this.name;
};
console.log(person8.sayHello());//Method calling

//REAL-TIME EXAMPLES
//OBJECT CONSTRUCTOR FUNCTION FOR PRODUCT
function Product(name,price,category){
    this.name=name;
    this.price=price;
    this.category=category;
}
let product1=new Product("Laptop",1000, "Electronics");
let product2=new Product("Shoes",2000, "Fashion");
console.log(product1);
console.log(product2);

//PROPERTY DEFAULT VALUE
function User(name,age,country="Not provided"){
    this.name=name;
    this.age=age;
    this.country=country;//default value is assigned, if not provided
}
let user1=new User("MADHU",23,"USA");
let user2=new User("SAM",25,"INDIA");
console.log(user1);
console.log(user2);

//ADDING PROPERTY DYNAMICALLY AFTER OBJECT CREATION
function Customer(name,email){
    this.name=name;
    this.email=email;
}
let customer1=new Customer("David","david12@gmail.com");
let customer2=new Customer("Madhu","Madhu6@gmail.com");
console.log(customer1);
console.log(customer2);


//CONSTRUCTOR FUNCTION METHOD
function Employee(name,position,salary){
    this.name=name;
    this.position=position;
    this.salary=salary;
    //Adding a method inside constructor
    this.getDetails=function(){
       console.log(`${this.name} + "works as a" + ${this.position} + "and earns" + $${this.salary}+ "per year." `); //TEMPLATE LITERALS - Backticks(`) 
    };
}

let employee1=new Employee("Emma","Software Engineer",8000);
let employee2=new Employee("Ryan","Software Engineer",7000);
console.log(employee1.getDetails());
console.log(employee2.getDetails());

//CLASSES
class Car1{ //cls.name = Car1
    constructor(name,year){ //constructor method
        this.name=name;
        this.year=year;
    }
}
//obj.creation
const mycar1=new Car1("Ford",2014);
const mycar2=new Car1("Audi",2018);
console.log(mycar1.name + " " + mycar2.name);

//UAING A CONSTRUCTOR TO INITIALIZE OBJECT PROPERTIES
class Car2{ //cls.name = Car1
    constructor(name,year){ //constructor method
        this.name=name;
        this.year=year;
    }
}
//obj.creation
const mycar3=new Car1("Ford",2014);
const mycar4=new Car1("Audi",2018);
console.log(`Car1:${mycar3.name}(${mycar3.year}) Car2:${mycar4.name}(${mycar4.year}) `);
console.log(mycar3.name,mycar3.year);
console.log(mycar4.name,mycar4.year);

//without constructor method
class Animal{} //class without constuctor
//obj.creation
const dog=new Animal();
console.log(`Dog Object:${JSON.stringify(dog)}`);
console.log(dog);

//constructor with default values
class Person9{
    constructor(name="unknown",age=0){ //constructor method
        this.name=name;
        this.age=age;
    }
}
const person10=new Person9("siva",23);
const person11=new Person9();
console.log(`Person 1:${person10.name}(${person10.age}) Person 2:${person11.name}(${person11.age})`);
console.log(person10.name,person10.age);
console.log(person11.name,person11.age);
console.log(person10);
console.log(person11);

//REAL-WORLD EXAMPLE
//E-COMMERCE PRODUCT EXAMPLE
class Product2{
constructor(name,price,category){
    this.name=name;
    this.price=price;
    this.category=category;
}
//method to apply discount to product price
applyDiscount(discountPecentage){
    this.price=this.price-(this.price * discountPecentage/100);
}
//method to display product details
displayProduct(){
 return `Product:${this.name} Price:$${this.price} Category:${this.category} `;
}
}
//creating product instance
const product3=new Product2("Mobile",1200,"Electronics");
const product4=new Product2("Laptop",18000);
//apply 10% discount on product 1
product4.applyDiscount(45);

console.log(`${product3.displayProduct()} ${product4.displayProduct()} `);

//closure
function discountPercentage2(discountPercent){
    return function(price){

        const discountAmount=price * discountPercent/100; // Calculate the discount
         return price-discountAmount; // Subtract discount from the original price

    };
}

var priceresult=discountPercentage2(45);
console.log(priceresult(18000)); //passing 1800 as a input value to ---> price parameter

//closure-another way
function discountPercentage3(discountPercent){
    return function(price){

        return price => price - (price * discountPercent / 100);
    };
}

var priceresult=discountPercentage2(45);
console.log(priceresult(18000));

//another type/way
function calculateDiscountPrice(originalPrice,discountPercentage){
    return originalPrice-(originalPrice * discountPercentage/100);
}
let originalPrice=18000;
let discountPecentage=45;

let finalPrice=calculateDiscountPrice(originalPrice,discountPecentage);
console.log(finalPrice);

// strings
let cartTotal="50"-10+5*2+"20";
console.log(cartTotal);

let cartTotal2=("50"-(10+5)*2+"20");
console.log(cartTotal2);

// //USER AUTHENTICATION
class User2{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    //method to simulate user registration-create & returns a new user Instance
    static register(username,email,password){
        return new User2(username,email,password);
    } 
    //method to check login credentials - compares input credentials with stored data to validate login 
    checkLogin(inputUsername,inputPassword){
        if(this.username===inputUsername && this.password===inputPassword){
            return `login successful welcome,${this.username}`;
        }
        else{
            return "Invalid username or password"
        }
    }
}
//registering new user
const user3=User2.register("siva","siva12@gmail.com","siva12");
//simulating login attempt
const loginResult=user3.checkLogin("siva","siva12");
console.log(loginResult);

//BANK ACCOUNT MANAGEMENT
class BankAccount{
    constructor(accountNumber,balance=0){
        this.accountNumber=accountNumber;
        this.balance=balance;
    }
    //method to deposit money
    deposit(amount){
        if(amount > 0){
            this.balance += amount;
            return `Deposited $${amount}.New Balance:$${this.balance}`;
        }
        else{
            return "deposited amount must be positive";
        }
    }
    //method to withdraw money
    withdraw(amount){
        if(amount >0 && amount <= this.balance){
            this.balance -=amount;
            return `withdrew $${amount}.New balance:$${this.balance}`;
        }
        else{
            return "Invalid withdrawal amount";
        }
    }
    //method to display account details
    displayAccount(){
        return`AccountNumber:$${this.accountNumber} Balance:$${this.balance}`;
    }
}
//creating a bank account instance
const account1=new BankAccount("123456789",500);
//performing transactions
const depositresult=account1.deposit(200);
const withdrawResult=account1.withdraw(100);
//display account information
console.log(`${account1.displayAccount()} ${depositresult} ${withdrawResult}`);
//JS class Methods
class Car3{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(){ //method
        const date=new Date();
        return date.getFullYear()-this.year;
    }
}

const myCar=new Car3("Ford",2014);
console.log("My car is " + myCar.age() + " years old." );

//FUNCTIONS-STRICT MODE
//use strict - keyword should be used to follow strict mode
function strictFunction(){
    "use strict";
    try{
        x=10;
    }catch(error){
        console.log(error.message);
    }
}
console.log(strictFunction(x));
//duplicate parameters

function duplicateparamter(a,a){
    console.log(a+a);   
}
duplicateparamter(2,3)

//INHERITANCE
class Person3{
    constructor(name){
        this.name=name;
    }
    //Parent Method
    greet(){  
        return `Hello,my name is ${this.name}`;
    }
}
//child class extending parent
class Student extends Person3{
    constructor(name,course){
        super(name);
        this.course=course;
    }
    //child method using parent method
    details(){
        return `${this.greet()} and I am studying ${this.course} `;
    }
}
//obj.creation of child class
const student1=new Student("siva","cs");
console.log(student1.details());

//Getters and Setters
class BankAccount2{
    constructor(balance){
        this._balance=balance;
    }
    get balance(){
        return this._balance;
    }
    //set -method --->allow validation and modification ,ensuring data consistency
    set balance(amount){
        if(amount < 0){
            console.log("balance cannot be negative");
        }
        else{
            this._balance = amount;
        }
    }
}

const account=new BankAccount2(5000);
account.balance=-1000;//error value cannot be negative
account.balance=7000;
console.log("updated balance:$" + account.balance);

//static methods
class MathUtility{ 
    // class -level static method
    static square(num){
        return num*num;
    }
}
console.log(MathUtility.square(5)); //classname.StaticMethodName
//ARRAY
let fruits=["apple","mango","banana"];
console.log(fruits);
//DATE OBJECT AND CONSTRUCTOR METHODS
let millis=1672531200000;
let datestr="2025-05-12";//string to date format
d=new Date();//current date and time
d1=new Date(Number(millis));
d2=new Date(datestr);
console.log(d);
console.log(d1);
console.log(d2);
let year=2023;
let month=12;
let day1=6;
let hours=8;
let minutes=23;
let d3=new Date(year,month,day1,hours,minutes);
console.log(d3);

//STRING OBJECTS
var txt=new String("Hello,Javascript!");
//displaying type of txt
console.log("value:" + txt + "|type:" +typeof txt);

//every
let scores2=[45,0,92,67,95];
let allPassed=scores2.every(score2=>score2>=40);
console.log(allPassed?"All students passed." : "some student failed");

//ARRAYS
//some-Checks if atleast one element in an array passes a test
let scores1=[75,88,92,67,85];
let highScore=scores.some(score=>score>90);
console.log(highScore ? "At least one student scored above 90." : "no student scored above 90");

//synchronous code - one task at a time
function f1(){
console.log("hi");
}

function f2(){
    console.log("bye");
    }

function f3(){
     console.log("good");
   }

   f1();
   f2();
   f3();