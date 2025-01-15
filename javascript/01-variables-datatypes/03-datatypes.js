let age = 24;
console.log(typeof (age)); // number
let name = "Tony Stark";
console.log(typeof (name)); // string
const price = 100.50;
console.log(typeof (price)); // number
let x = null;//Absence of object
console.log(typeof (x)); // object
let y;
console.log(typeof (y)); // undefined
const isFollow = false;
console.log(typeof (isFollow)); // boolean


let num=BigInt("123456789876");
console.log(typeof num);

let z=Symbol("Hello!");
console.log(typeof z);


//Object - It is a collection of key-value pairs

const student ={
    name:"Rahul",
    age:20,
    cgpa:8.5,
    isPassed:true,
};
console.log(student);
console.log(student["name"]);

student["age"]=student["age"]+1;
console.log(student["age"]);