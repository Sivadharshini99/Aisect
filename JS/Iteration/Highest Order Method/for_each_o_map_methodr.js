//for-each
//to iterate array values
let fruits=['apple',"mango","kiwi"];
fruits.forEach(printFruit)//callback fn
function printFruit(currentElement,index,totalArray){//only accept upto 3 parameters
    // console.log(currentElement);
    // console.log(currentElement,index);
   console.log(currentElement,index,totalArray);  
}
//modifying element using for-eCH
let newarr1=fruits.forEach((currentElement)=>{
    console.log(currentElement.toUpperCase());
    
})
//map method
fruits.map(function(currentElement,index,totalArray){
    console.log(currentElement,index,totalArray);  //prints exactly same
})

//map  method-->returns new array
let newArr=fruits.map((currentElement,index)=>{
    // return currentElement;
    // return {fruit:currentElement}
    return {id:index+1,fruit:currentElement}
})
console.log(newArr);

//chaining method--single line--passing multiple args/method--only possible in map method
//map
let newArr3=fruits.map(currentElement=>currentElement.toUpperCase()).sort().fill(123);//sort and fill are chaining methods
console.log(newArr3);

//condition passing
//map
let newArr4=fruits.map((currentElement)=>{
    return currentElement=="apple";
})
console.log(newArr4);
//for-each
fruits.forEach(val=>console.log(val=='apple'));
