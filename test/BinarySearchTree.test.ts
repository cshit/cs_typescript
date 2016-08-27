///<reference path='../typings/index'/>

var assert = require('assert');

import NodeBST from '../BinarySearchTree/Node_BST'

describe('Binary Search Tree', ()=>{
	describe('Node', ()=>{
		
		var node;
		var initValue = 10;
		var difference = 5;
		var lowerValue = initValue - difference;
		var higherValue = initValue + difference;

		// Tree Example:
		/*
		*            10
		*         /      \
		*        8       15
		*      /   \   /    \
		*     4    6  13    17
		*    / \  /        /  \
		*   2  3 5        19  20
		*
		*            9
		*         /      \
		*        8       15
		*      /   \   /    \
		*     3    6  13    17
		*    / \  /        /  \
		*   1  3 5        19  20
		*
		*
		* [,,,,,,,,,,,,10,,,,,,,,,,,,,,] ~ n/2
		* [,,,,,,,/,,,,,,,,,,,\,,,,,,,,] ~ n/3+1 && 2n/3
		* [,,,,,,8,,,,,,,,,,,,15,,,,,,,] ~ n/3 && 2n/3
		* [,,,/,,,,,\,,,,,,/,,,,,,\,,,,] ~ n/5+1 && 2n/5 && 3n/5+1 && 4n/5
		* [,,4,,,,,,6,,,,,13,,,,,,17,,,] ~ n/5 && 2n/5 && 3n/5 && 4n/5
		* [,/,\,,,,/,\,,,/,,\,,,,,/,\,,] ~ 1 && n/7 && 2n/7+1 && 3n/7 && 4n/7+1 && 5n/7 && 6n/7+1 && n
		* [2,,3,,,5,,4,,11,,12,,,19,,20] ~ 0 && n/7 && 2n/7 && 3n/7 && 4n/7 && 5n/7 && 6n/7 && n
		*
		* */

		beforeEach('some description', ()=>{
			node = new NodeBST(initValue);
			node.insert(lowerValue);
			node.insert(higherValue);
		});

		describe('Initialization', ()=>{
			it('should contain value field as a reader', ()=>{
				assert.equal(initValue, node.value);
			});
		});

		describe('Insert', ()=>{
			it('insert creates a left child when value is lower', ()=>{
				assert.equal(node.leftChild.value, lowerValue);
			});

			it('insert creates a right child when value is high', ()=>{
				assert.equal(node.rightChild.value, higherValue);
			});

		});

		describe('Remove', ()=>{
			it('remove targeted left child'
			// 	, ()=>{
			// 	node.remove(lowerValue);
			// 	assert.equal(node.leftChild, null)
			// }
			);

			it('remove targeted right child'
			// 	, ()=>{
			// 	node.remove(higherValue);
			// 	assert.equal(node.rightChild, null)
			// }
			)
		});

	});
});