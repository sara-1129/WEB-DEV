//OBJECT
let obj = {
    name : "Sara",
    //"full name":"Sara Saini", => we ahve to use double quotes for key if there are more than one word in the key
    age : 18,
    height : "5 feet 8 inch",
    greet: function(){
        console.log("Hello");
        
    }
};
console.log(obj);
//Calling the function greet from the object
obj.greet();

console.log(typeof(obj));

let obj2 =obj;
