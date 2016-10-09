///<reference path='../../typings/index'/>

import mergeSort from "../../Sort/Merge/Merge";
import compare from "../../Sort/compare";

var assert = require('assert');
describe('Merge Sort', function() {

	var arr1;
	var arr2;
	var arr3;

	beforeEach(function () {
		arr1 = [2, 5, 4, 1, 3, 10, 20, 14, 7];
		arr2 = [-2, 18, -14, 37, 20, 33, 26, 21, 5, 31];
		arr3 = [9, 19, 5, -7, 38, 13, 20, 2, 12, 35];

		[arr1, arr2, arr3].forEach((arr)=>{ arr.sort(function(a,b){return a-b;})});
	});
	
	describe('Sorts', function() {

		it('First', function() {
			var sorted1 = mergeSort([2, 5, 4, 1, 3, 10, 20, 14, 7], 0, arr1.length-1);
			assert.ok(compare(sorted1, arr1));
		});

		it('Second', function() {
			var sorted2 = mergeSort([-2, 18, -14, 37, 20, 33, 26, 21, 5, 31], 0, arr2.length-1);
			assert.ok(compare(sorted2, arr2));
		});

		it('Third', function() {
			var sorted3 = mergeSort([9, 19, 5, -7, 38, 13, 20, 2, 12, 35], 0, arr3.length-1);
			assert.ok(compare(sorted3, arr3));
		});
	});
});


