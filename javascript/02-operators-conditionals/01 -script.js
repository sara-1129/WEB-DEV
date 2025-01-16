//This prints out the name "Sara" to the console
console.log("Sara");
//Comments are ignored by the computer when the code is run. 
// They are used to explain what the code does.




/**ARITHMETIC OPERATORS */
let a = 5;
let b = 2;
console.log("a + b =", a + b); //7
console.log("a - b =", a - b); //3
console.log("a * b =", a * b); //10
console.log("a / b =", a / b); //2.5
console.log("a % b =", a % b); //1
console.log("a ** b =", a ** b); //25
//The modulus operator (%) returns the remainder of a division operation


/**ASSIGNMENT OPERATORS */
let x = 5;
let y = 2;

x+= 4; // x = x + 4
console.log("x += 4 =", x); //9




/**COMPARISON OPERATORS */
let c = 5;//number 
let d = 2;
console.log("c == d =", c == d); //false
console.log("c != d =", c != d); //true

let e ="5";//string
console.log("c == e =", c == e); //true
console.log("c === e =", c === e); //false
//The === operator compares both value and type



/**LOGICAL OPERATORS */
let f = 5;
let g = 2;
let h = 8;
console.log("f > g && f < h =", f > g && f < h); //true
console.log("f > g || f > h =", f > g || f > h); //true
console.log("!(f > g) =", !(f > g)); //false