import countIslands from "../../Arrays/IslandCounter";

var assert = require('assert');

describe('Counts islands in 2D array:', ()=>{
	it('Small', ()=>{
		var matrix = [
			['O', 'O', 'O'],
			['X', 'X', 'O'],
			['X', 'X', 'O'],
			['O', 'O', 'X'],
			['O', 'O', 'X'],
			['X', 'X', 'O']
		];

		assert.equal(countIslands(matrix), 3)
	});

	it('Big', ()=>{
		var matrix = [
			['X', 'O', 'O', 'O', 'O', 'O'],
			['X', 'O', 'X', 'X', 'X', 'X'],
			['O', 'O', 'O', 'O', 'O', 'O'],
			['X', 'X', 'X', 'O', 'X', 'X'],
			['X', 'X', 'X', 'O', 'X', 'X'],
			['O', 'O', 'O', 'O', 'X', 'X'],
		];

		assert.equal(countIslands(matrix), 4)
	})
});