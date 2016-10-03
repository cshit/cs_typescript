import countingSort from "./Counting";

var arr2 = [2, 18, 14, 37, 20, 33, 26, 21, 5, 31];
var arr3 = [-1, 19, 5, 7, 13, 13, 20, 2, 12, 35];


var sorted1 = countingSort(arr2, 0, arr2.length-1 );
var sorted2 = countingSort(arr3, 0, arr3.length-1 );

console.log(sorted1 == arr2.sort());
console.log(sorted2 == arr3.sort());