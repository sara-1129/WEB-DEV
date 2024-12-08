// let arr =[4,5,2,7,5,9];
// arr.sort();
// console.log(arr);
// console.log(arr.indexOf(10));


//LOOPS

// let arr = [10,20,30]
// arr.forEach((value,index)=>{
//     console.log(`Number: ${value} and index :${index}`);
    
// }
// )


// let obj = {
//     name : "Sara",
//     //"full name":"Sara Saini", => we ahve to use double quotes for key if there are more than one word in the key
//     age : 18,
//     height : "5 feet 8 inch",
//     greet: function(){
//         console.log("Hello");
        
//     }
// };

// for(let key in obj)
// {
//     console.log(key," ",obj[key]);
    
// }
// let fullName ="SARA";
// for(let value of fullName){
//     console.log(value);
    
// }


//ARRAY WITH FUNCTIONS
let arr =[10,20,30,40,50];


let getSum = (arr) =>
{
    let len = arr.length;
    let sum  = 0;
    for (let index = 0; index <=len - 1 ; index++){
        sum = sum + arr[index];

        
    }
    return sum;

}

//let ans = getSum(arr);
console.log(getSum(arr));
