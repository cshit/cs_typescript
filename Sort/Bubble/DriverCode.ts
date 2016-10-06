import compare from "../compare";
import bubbleSort from "./Bubble";

var arr1 = [2, 5, 4, 1, 3, 10, 20, 14, 7];
var arr2 = [-2, 18, -14, 37, 20, 33, 26, 21, 5, 31];
var arr3 = [9, 19, 5, -7, 38, 13, 20, 2, 12, 35];

var sorted1 = bubbleSort([2, 5, 4, 1, 3, 10, 20, 14, 7]);
var sorted2 = bubbleSort([-2, 18, -14, 37, 20, 33, 26, 21, 5, 31]);
var sorted3 = bubbleSort([9, 19, 5, -7, 38, 13, 20, 2, 12, 35]);

[arr1, arr2, arr3].forEach((arr)=>{ arr.sort(function(a,b){return a-b;})});

console.log(compare(sorted1, arr1));
console.log(compare(sorted2, arr2));
console.log(compare(sorted3, arr3));
