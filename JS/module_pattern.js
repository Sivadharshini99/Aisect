//MODULE PATTERN
var Employee=(function(){
    //private variables
    var name,age,salary;
    //method to initialize object properties
    function init(Name,Age){
        name=Name;//asign name
        age=Age;//asign age
        salary=age*50;//calculate salary based on age      
    }
    //method to display object properties
    function Display(){
        document.write(name + "|" + age + "|" + salary);
    }
    //exposing methods(public API)
    return{
        Init:init,//public method to initialize
        Display:Display//public method to display
    };
})
();