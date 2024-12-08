/**function defination
function sayMyName()
{
    console.log("Sara");
    
}

function call
sayMyName(); 
*/

/**function defination
function printCounting()
{
    for (let i = 1; i <= 10; i++)
    {
        console.log(i);
        
    }
}

function call
printCounting();*/


//FUNCTIONS WITH PARAMETERS

function printNumber(num)// num is parameter for the function
{
    console.log(`Printing number : ${num}`);
    
}

printNumber(5);// 5 is the argument for this function call

function getAverage(num1,num2)
{
    let average = (num1 + num2)/2;
    console.log(`Average: ${average}`);
    
}

getAverage(5,7);