//Creation of arrays
let arr = [1,2,3,4,5]; // by array literal
console.log(arr);
console.log(typeof(arr));

let brr = new Array ('love',1,true); // by array constructor
console.log(brr);
console.log(typeof(brr));

console.log(brr[0]);

brr.push('Babbar');
console.log(brr);
brr.pop();
console.log(brr);

brr.unshift('Babbar');
console.log(brr);
brr.shift();
console.log(brr);

brr.push(20);
brr.push(3);
brr.push(5);
brr.push(7);
brr.push('Sara');
console.log(brr);

 console.log(brr.slice(2,4));


(brr.splice(1,2,'Kunal'));
console.log(brr);


