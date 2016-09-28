import selectionSort from "./Selection";


var arr1 = [2,5,4,1,3,10,20,14,7];
var arr2 = [2, 18, 14, 37, 20, 33, 26, 21, 5, 31];
var arr3 = [9, 19, 5, 7, 38, 13, 20, 2, 12, 35];

var sorted = selectionSort(arr1);
var sorted1 = selectionSort(arr2);
var sorted2 = selectionSort(arr3);

console.log(sorted == arr1.sort());
console.log(sorted1 == arr2.sort());
console.log(sorted2 == arr3.sort());