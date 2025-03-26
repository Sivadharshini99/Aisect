
//OBJECT DESTRUCTURING
//OBJ.CREATION
let user={
    id:1,
    name:"siva"
}
//normal call
 console.log(user.id);

// object destructuring- can't change property name
 let {id,name} =user;
console.log(name);//direct calling of variable without object name

//no order for properties
let details={
    num:123,
    name2:"divi"
}
 let {num} =details;//single property destruct
 console.log(num);
 //order change destruct -> property name order change
 let details2={
    num2:1236,
    name3:"diviya"
}
let {name3,num2} =details2;//order change destruct
console.log(num2,name3);

//nested obj destruct
let nestObj={
     id2:1,
    name4:"siva",
    bankdetails:{
       accNo:123,
       branch:"xyz"
    }
}
let {id2,name4,bankdetails:{accNo,branch}}=nestObj
console.log(id2,accNo,);


