//If statement
if (true) {
    console.log("This code will run");
}

//Else statement
if (false) {
    console.log("This code will not run");
} else {
    console.log("This code will run");
}

//Else if statement

let i = 5;
let j = 2;
if (i > j) {
    console.log("i is greater than j");
} else if (i < j) {
    console.log("i is less than j");
} else {
    console.log("i is equal to j");
}

//Switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    default:
        console.log("Today is not Monday, Tuesday or Wednesday");
}
//we can take string, number, boolean, or variable as an argument in the switch statement