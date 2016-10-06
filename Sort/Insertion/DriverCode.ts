import compare from "../compare";
import insertionSort from "./Insertion";

var arr1 = [2, 5, 4, 1, 3, 10, 20, 14, 7];
var arr2 = [-2, 18, -14, 37, 20, 33, 26, 21, 5, 31];
var arr3 = [9, 19, 5, -7, 38, 13, 20, 2, 12, 35];

var sorted1 = insertionSort([2, 5, 4, 1, 3, 10, 20, 14, 7]);
var sorted2 = insertionSort([-2, 18, -14, 37, 20, 33, 26, 21, 5, 31]);
var sorted3 = insertionSort([9, 19, 5, -7, 38, 13, 20, 2, 12, 35]);

[arr1, arr2, arr3].forEach((arr)=>{ arr.sort(function(a,b){return a-b;})});

console.log(compare(sorted1, arr1));
console.log(compare(sorted2, arr2));
console.log(compare(sorted3, arr3));

