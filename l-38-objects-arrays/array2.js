//MAP

// let arr =[10,20,30];

// let ansArray = arr.map((number) =>{
//     return number*number;
// }
// )
// console.log(ansArray);
// console.log(arr);

// arr.map((number , index) =>{
//         console.log(number + 1);
//         console.log(index);
        
//      })





//FILTER

// let arr =[10,20,30,11,21,44,51];
//  let evenArray = arr.filter((number)=>{
//     // if (number % 2 == 0){
//     //     return true;
//     // }
//     // return false;
//     return number % 2 === 0;
// })

// console.log(evenArray);


// let arr =[1, 2, 'kunal', 'Love','Sara',null];

// let finalArray = arr.filter((value) =>{
//     // return typeof(value) === String; --->Ye nhi chala
//     return typeof(value) === 'string';
// })
// console.log(finalArray);


//REDUCE


let arr = [10,20,30,40];
let ans = arr.reduce((acc,curr) =>{
    return acc +curr ;

}, 0 ) //Here  0  is the initialised value of accumulator

console.log(ans);
