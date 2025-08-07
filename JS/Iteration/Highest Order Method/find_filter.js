//filter--receives multiple values
let employees = [
    {empName:"siva",salary:5000},
    {empName:"priya",salary:3000},
    {empName:"riya",salary:1000},
];
// let result=employees.filter(val=>val.salary>2000);
let result=employees.filter((val,index,array)=>{
    console.log(index);
    return val.salary>2000
});
console.log(result);

//chaining-posible in filter method
let result3=employees.filter(val=>val.salary>2000).fill({id:1,name:'xty'})
console.log(result3);


//find--receives only one value(that 1st satisfied condition value)
let result2=employees.find((val,index,array)=>{
    console.log(index);  
   return val.salary>2000
})
console.log(result2);