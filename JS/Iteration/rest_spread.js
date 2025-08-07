//spread-concat,clone
//array
let a = [1, 2, 3, 4];
let b = [5, 6];
let c = [...a, ...b, 7, 8];
console.log(c);
//change value
a[1] = 19;
console.log(a); //changes value for A
console.log(c); //doesn't change value (since both address are different--call by reference(create new obj/array))

//objects
let empDetails = {
  name: "siva",
  age: 20,
};
let result = {
  ...empDetails,
  age:23,//change value
  desp: "developer",
  familyDetails: { members: 2 },
  greet: function () {
    console.log("welcome");
  },
};
console.log(empDetails);
console.log(result);

//Rest parameter
//normal fun
function demo(a){//only one parameter is passed
    console.log(a);
}
demo(10,20,30);//only takes one argument

//now rest parameter
function demo1(...a){//only one parameter is passed
    console.log(a);
}
demo1(10,20,30);//takes multiple argument

//rest operator-destructing
//array
let val = [1, 2, 3, 4,5,6,7,8];
//destructing
let [a1,b1,...balance]=val;
console.log(a1);
console.log(b1);
console.log(balance);
console.log(a1,b1,balance);

//obj.
let empDetails2 = {
    uname: "riya",
    age: 21,
    members:3,
    desp:"developer"
  }
  
  //destructing
  let {uname,...restofvalues}=empDetails2;
  console.log(empDetails2);
  console.log(uname);
  console.log(restofvalues);
  