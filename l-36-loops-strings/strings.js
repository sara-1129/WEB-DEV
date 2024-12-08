let firstName = "Love";
let lastName = 'Babbar';

console.log(typeof(firstName));

let name = `Sara 
Saini
This is my name.`;
console.log(name);

let name2 = new String("Sara");
console.log(name2);

/***OPERATIONS ON STRINGS */

let op1 = 'English';
let op2 = 'HINDI';

// let ans = op1 + op2 ; // concatenate
// console.log(ans);


let finalAns =`${op1}${op2}`; // concatenate
console.log(finalAns);

console.log(op1.length) ; // length

console.log(op1.toUpperCase()) ;

console.log(op2.toLowerCase())


let str ="HelloBabbar";
console.log(str.substring(2)); // Starting from index 2 till the end
console.log(str.substring(2,6)); // here the last index is exclusive



let sentence = "Hello ji \"kaise\" ho saare"; // split method
let words = sentence.split(' ');
// let words2= sentence.split(' \');  =>Gives an error as it is used with escape sequence character
let words2= sentence.split('\\');// =>It will work 
console.log(words);
console.log(words.join('-')); // to join into sentence



