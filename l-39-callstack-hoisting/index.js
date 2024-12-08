//FUNCTION HOISTING

// {sayMyName("Sara")


// function sayMyName(finalname){
//     console.log(finalname);          //The function gets shifted to the top of its scope
//                                      // that's why calling it before its defination is not giving an error
    
// }
// }



//sayHello();  Gives an ERROR
// let sayHello = () => {                      /* We can't do function hoisting using function expression
//                                                     ,It gives an error */
//     console.log("Hello kaise ho");
    
// }
// sayHello();







//VARIABLE HOISTING

// console.log(age);    // variable ke case mein sirf declaration hi hoist hoti h value hoist nhi hoti isliye first case mein undefined aa rha h
// age =18;
// console.log(age);


// var age;


// console.log(age2);
// let age2  = 25;





//CLASS HOISTING
// const obj1 = new Human();

// class Human {
                                           //  --> Gives reference error
// }

