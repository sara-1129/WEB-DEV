let marks = prompt("Enter your marks: ");
if (marks >= 80 && marks <= 100) {
    console.log("You got an A");
} else if (marks >= 70) {
    console.log("You got a B");
} else if (marks >= 60) {    
    console.log("You got a C");
}   else if (marks >= 50) {     
    console.log("You got a D");
} else if (marks <50 && marks >= 0) {
    console.log("You got an F");
}
else {
    console.log("Invalid input");
}