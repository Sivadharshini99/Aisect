//FOR-IN
//objects
let person={
    name:"siva",//string
    hobbies:["song","dance","cooking"],//array
    age:23,//int
    familyDetails:{   //nested object
        totalmembers:3,
        siblings:['a','b']
    },
    greet(){//method/named fn=>since for-in iteration
        console.log("welcome home");       
    }
}
for (const key in person) {
  //console.log(key);    //just property name /key name
  console.log(person[key]); //values
}
//array
let arr=[12,13,14];
for (const x in arr) {
    console.log(arr[x]);  // x-->pts to index(value)
}
//string
let str='mango';
for (const val in str) {
    console.log(str[val]);    
}
