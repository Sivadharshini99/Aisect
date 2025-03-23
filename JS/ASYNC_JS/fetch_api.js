//API TYPES-1.RESTFUL API(REPRESENTATIONAL STATE TRANSFER) 2.SOAP API(SIMPLE OBJECT ACCESS PROTOCOL)
//FETCH METHOD,HTTP METHODS, JSON(KEY-VALUE PAIR--LIKE OBJECT)-DATA FORMAT(DATA EXCHANGE,--CHANGING LANGUAGE/PARSING),API(WEB SERVICES)
//NOW USING FETCH METHOD-RETURNS PROMISES-ASYNCHRONOUS JS
//GET method 
fetch("https://fakestoreapi.com/Users/abn")//users=>Endpoint,..Users/1 -> first id data only
//PROMISE CHAINING=> 2 then blocks is used(1->data receive ,2->data convert to js objects and show )
//DATA receive from api to CONVERSION
.then((response)=>{
    if(!response.ok){//ok - property-->(true/false=proper data(api-endpoint)/not)
        throw new Error("Data not found")
    }
    else{
     return response.json()//json()-to convert json into normal js objects(parsing)//json eg:"address":"street 123" everything in string to normal js obj eg:address:'street 123'
    } // else block is not needed return response.json() ...line does the same
    
})
// converted DATA RECEIVE
.then((data)=>{
    console.log(data);//converted data is received here  
})
//ERROR HANDLING
.catch((error)=>{
     console.log(error.message);
     
})

//above code in async/await
async function fetchData(){

    try{
       let response = await fetch("https://fakestoreapi.com/Users")//returns promise

       if(!response.ok){
        throw new Error("Data not found")//throws error directly into catch block
    }
    let data = await response.json()//directly receives the data(as as else block in above code)
     console.log(data[0]);//prints the data
     
    }

    catch(error){
        console.log(error.message);
        

    }

}
fetchData()//fn.call