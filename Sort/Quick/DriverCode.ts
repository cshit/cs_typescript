import compare from "../compare";
import quickSort from "./Quick";

var arr1 = [2, 5, 4, 1, 3, 10, 20, 14, 7];
var arr2 = [-2, 18, -14, 37, 20, 33, 26, 21, 5, 31];
var arr3 = [9, 19, 5, -7, 38, 13, 20, 2, 12, 35];

var sorted1 = quickSort([2, 5, 4, 1, 3, 10, 20, 14, 7], 0, arr1.length-1);
var sorted2 = quickSort([-2, 18, -14, 37, 20, 33, 26, 21, 5, 31], 0, arr2.length-1);
var sorted3 = quickSort([9, 19, 5, -7, 38, 13, 20, 2, 12, 35], 0, arr3.length-1);

[arr1, arr2, arr3].forEach((arr)=>{ arr.sort(function(a,b){return a-b;})});

console.log(compare(sorted1, arr1));
console.log(compare(sorted2, arr2));
console.log(compare(sorted3, arr3));