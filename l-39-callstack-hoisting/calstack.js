//Assign to variable
let greet = function(){
    console.log("Greetings");
    
}

//greet();

//Pass as an argument
function greetMe(greet,fullName){
     
    console.log(fullName);
    greet();
    
}
//greetMe(greet,"Sara")


//Function returns function

function solve(num){
    return function(num){
        return num*num;
    }
}
ans =solve(10);
finalAns = ans(5);
//console.log(finalAns);


//As a value inside data structure
const arr =[
    function (a,b){
        return a+b;
    },
    function (a,b){
        return a-b;
    },
    function (a,b){
        return a*b;
    },
]

let first = arr[1];
let value1 = first(9,10);
console.log(value1);


//In an  object

let obj = {
    age:25,
    wt:26,
    ht:180,
    greeting: ()=>{
        console.log("Hello ji");
        
    }

}

console.log(obj.age);
obj.greeting();
