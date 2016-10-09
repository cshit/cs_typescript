import compare from "../../Sort/compare";
import combine from "../../Arrays/Combination";
import permutes from "../../Arrays/Permutation";

var assert = require('assert');

describe('Traverse an Array', function(){

	var target;
	beforeEach(()=> {
		target = [1,2,3,4,5];
	});

	describe('Simple', () => {
		it('Combination', () => {
			var combinations = [
				[1,2],[1,3],[1,4],[1,5],
				[2,1],[2,3],[2,4],[2,5],
				[3,1],[3,2],[3,4],[3,5],
				[4,1],[4,2],[4,3],[4,5],
				[5,1],[5,2],[5,3],[5,4]
			];

			assert.ok(compare(combinations, combine(target)))
		});


		it('Permutation: Low to Higher', ()=>{
			var permutations =  [
				[ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 1, 5 ],
				[ 2, 3 ], [ 2, 4 ], [ 2, 5 ],
				[ 3, 4 ], [ 3, 5 ],
				[ 4, 5 ]
			];
			assert.ok(compare(permutations, permutes.permuteLowtoHigh(target)));
		});

		it('Permutation: High to low', ()=>{
			var permutations = [
				[ 5, 4 ], [ 5, 3 ], [ 5, 2 ], [ 5, 1 ],
				[ 4, 3 ], [ 4, 2 ], [ 4, 1 ],
				[ 3, 2 ], [ 3, 1 ],
				[ 2, 1 ]
			];

			assert.ok(compare(permutations, permutes.permuteHighttoLow(target)))
		})
	});
});