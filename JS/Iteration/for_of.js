//FOR-OF
//array
let arr=[10,20,30,40];
for(let iteration of arr){
    console.log(iteration);
    
}
//string
let str="java";
for(let x of str){
    console.log(x);
}
// for(let i of arr){
//     console.log(i);
// }
//FUNCTION
//GENERATOR FN
function* generatorFunction(){
 yield 1
 yield "second value"
 yield 'third value'
 return 'final value'//no return keyword-->default-->undefined
}
let generate=generatorFunction();
//print in object type-->{ ...},value-print normal
console.log(generate.next());
console.log(generate.next().value);
console.log(generate.next().value);
console.log(generate.next());

//for-of:Function(generator fn)
function* generatorFunction(){
    yield 1
    yield 2
    yield 3
}
let result=generatorFunction();//result-->iterator obj
for (const val of result) {
    console.log(val);   
}




