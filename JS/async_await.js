//PROMISE-MICRO TASK-->to handle asynchronous task
//settimeout,setinterval--macro task
//AYNC/AWAIT
//using await we can make it synchronous
let newPromise=new Promise((fulfilled,failure)=>{
    let datasReceived=false;
    if(datasReceived){
        fulfilled("data fetched successfully");//resolve -success 
    }
    else{
        //failure("data not found");//reject-failure
        throw new Error("search proper data")//Error---object/constructor/method---by explicitly/directly catch/throw error
    }
})
// newPromise.then((message)=>{
//     console.log("data fetched");
// })
// console.log("last")

//await way-convert it into synchronous task
async function executePromise(){
    try{
        let message=await newPromise;//AWAIT-ONLY HANDLES RESOLVE
        let newMessage=await newPromise;//AWAIT-ONLY HANDLES RESOLVE

        console.log(message);
        console.log(`Next message:${newMessage}`);//multiple promises can be handled/managed in single block
    }
    catch(error){
        console.log(error.message)//error.message-property--don't throw error but instead just print error message in throw block 
    }
    finally{//either resolve or reject finally block will be executed
        console.log("end")
    }
}
executePromise();//execute synchronous task 1st then promise task becoz of await fn
console.log("last");
//TO HANDLE REJECT - USE TRY/CATCH
//WHEN STMTS ARE GIVEN-- IN PROMISE --- THE STMTS ARE EXECUTED 1ST THEN ONLY THE PROMISE WILL BE EXECUTED
