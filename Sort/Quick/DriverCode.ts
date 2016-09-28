import quickSort from "./Quick";

var arr1 = [2,5,4,1,3,10,20,14,7];
var arr2 = [2, 18, 14, 37, 20, 33, 26, 21, 5, 31];
var arr3 = [9, 19, 5, 7, 38, 13, 20, 2, 12, 35];

var sorted  = quickSort(arr1, 0, arr1.length-1 );
var sorted1 = quickSort(arr2, 0, arr2.length-1 );
var sorted2 = quickSort(arr3, 0, arr3.length-1 );

console.log(sorted);
console.log(arr1);
console.log(sorted1);
console.log(arr2);
console.log(sorted2);
console.log(arr3);

console.log(sorted  == arr1.sort());
console.log(sorted1 == arr2.sort());
console.log(sorted2 == arr3.sort());