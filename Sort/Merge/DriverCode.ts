import mergeSort from "./Merge";

var arr1 = [2,5,4,1,3,10,20,14,7];
var arr2 = [2, 18, 14, 37, 20, 33, 26, 21, 5, 31];
var arr3 = [9, 19, 5, 7, 38, 13, 20, 2, 12, 35];

var sorted = mergeSort(arr1, 0, arr1.length-1);
var sorted1 = mergeSort(arr2, 0, arr2.length-1);
var sorted2 = mergeSort(arr3, 0, arr3.length-1);

console.log(sorted == arr1.sort());
console.log(sorted1 == arr2.sort());
console.log(sorted2 == arr3.sort());