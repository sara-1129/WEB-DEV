
//GLOBAL SCOPE

var age = 15 ; //global scope  ---> Can be assessed in whole program


//BLOCK SCOPE
{
    var name = "Sara"; // doesn't follow block scope can be accessed outside this block


    let name2 ="Saini"//Has block scope ,can't be accessed outside
}

console.log(name);
//console.log(name2);   --- > Gives reference error


// FUNCTIONAL SCOPE
function sayHello(){
    var name3 = "earth";
    console.log("Hello Dunia",name);
   
    
}

//console.log(name3);  ---- >Reference error





//TEMPORAL DEAD ZONE
console.log(num);

let num =100; //reference error






