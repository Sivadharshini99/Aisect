let array=["siva","ravi","riya","payal"];
//1st way
console.log(array[1]);

//2nd way
const name1=array[0];
const name2=array[1];
const name3=array[2];
const name4=array[3];
console.log(array[2]);

//ARRAY DESTRUCTURING - store values in separate variables
let[name5,name6,name7,name8]=array;
console.log(name5,name6);

//only destruct some array but not all
let[name9,,,name10]=array;//the middle , , skips two values
console.log(name9,name10);

//rest operator destruct
let[a1,a2,...a3]=array;
console.log(a1,a2,a3);

//nest array destruct
let nestArr=[1,2,3,[4,5,[6,7]]];
let[x,y,z,[p,q,[r,s]]]=nestArr
console.log(x,p,s);

