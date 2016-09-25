var bs = require('./Binary');


var z:number[] = [2, 3, 4, 5, 6, 7, 11, 16, 19, 20];
var y:number[] = [0, 1, 2, 3, 4, 5,  6,  7,  8,  9];

console.log("Iterative");
console.log(bs.binarySearch(z, 7));
console.log(bs.binarySearch(z, 5));
// console.log(bs.binarySearch(z, 15));

console.log("Recursive");
console.log(bs.binarySearchRecursive(z, 7, 0, z.length-1));
console.log(bs.binarySearchRecursive(z, 5, 0, z.length-1));
// console.log(bs.binarySearchRecursive(z, 15));