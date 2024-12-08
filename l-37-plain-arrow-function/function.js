//FUNCTIONS WITH RETURN VALUE

function getSum(a,b,c)
{
    sum = a + b + c;
    return sum;

}

let ans = getSum (1,2,3);
console.log("Printing sum :",ans);


function getMyName (firstName,lastName)
{
    
    let fullName = firstName +" "+lastName;
    return fullName;
    //unreachable statements
    let a = 10;
    let b = 5;
    console.log(a+b);
    
}

 let name = getMyName ("Sara","Saini");
console.log("Full name:",name);



// function getMultiplication(a, b)
// {
//     return a * b;
// }                                          // => ONE WAY
//console.log(getMultiplication(2,10));

//FUNCTION EXPRESSION =>ANOTHER WAY

const getMultiplication  =function (a, b)
{
    return a * b;
}
let ans3 =getMultiplication(2,10);
console.log(ans3);


//ARROW FUNCTION

let getExp = (x, y) => {
    return x**y;
}
console.log(getExp(2,10));
