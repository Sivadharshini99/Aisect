
//Asynchronous code-Multiple task execution simultaneously do not wait to one task get finished,if it has some time to excute ,...then it will execute some other task
//callback
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
       setTimeout(f2,2000);//CALLBACK-FN.PASSED AS ARGUMENT OF ANOTHER FUNCTION ----- setTimeout method with 2 parameters(function,time)
       f3();
//PROMISES---3 STATES--->RESOLVE,REJECT,PENDING
let newPromise=new Promise((resolve,reject)=>{//callback passed
    let dataReceived=true;
if(dataReceived){
    resolve("data received");//resolve -success 
}
else{
    reject("data not received");//reject-failure
}
})
//newPromise.then(console.log).catch(console.log)//TO MANAGE RESOLVE(THEN-BLOCK IS USED)---TO MANAGE REJECT(CATCH-BLOCK IS USED)
// ALTERNATIVE WAY
newPromise.then((message)=>{//callback passed
console.log("success:" + message);
})
.catch((error)=>{
    console.log("error:" + error);
})
.finally(()=>{
    console.log("end")
})