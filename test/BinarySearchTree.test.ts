///<reference path='../typings/index'/>

var assert = require('assert');

import NodeBST from '../BinarySearchTree/Node_BST'

describe('Binary Search Tree', ()=>{
	describe('Node', ()=>{
		
		var rootNode;
		var initValue = 10;
		var sampleArray = [12,7,8,3,2,4,1,19,18,16,20,6,15,11,9];

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
		* [,,,,,,,,,,,,20,,,,,,,,,,,,,,] ~ n/2
		* [,,,,,,,/,,,,,,,,,,,\,,,,,,,,] ~ n/3+1 && 2n/3
		* [,,,,,,10,,,,,,,,,,,,40,,,,,,,] ~ n/3 && 2n/3
		* [,,,/,,,,,\,,,,,,/,,,,,,\,,,,] ~ n/5+1 && 2n/5 && 3n/5+1 && 4n/5
		* [,,4,,,,,,9,,,,,13,,,,,,17,,,] ~ n/5 && 2n/5 && 3n/5 && 4n/5
		* [,/,\,,,,/,\,,,/,,\,,,,,/,\,,] ~ 1 && n/7 && 2n/7+1 && 3n/7 && 4n/7+1 && 5n/7 && 6n/7+1 && n
		* [2,,3,,,5,,4,,11,,12,,,19,,20] ~ 0 && n/7 && 2n/7 && 3n/7 && 4n/7 && 5n/7 && 6n/7 && n
		*
		* */

		beforeEach('some description', ()=>{
			rootNode = new NodeBST(10);
			sampleArray.forEach((val)=>{rootNode.insert(val)});
		});

		describe('Initialization', ()=>{
			it('should contain value field as a reader', ()=>{
				assert.equal(initValue, rootNode.value);
			});
		});

		describe('Insert', ()=>{
			it('insert creates a left child when value is lower', ()=>{
				assert.equal(rootNode.leftChild.value, 7);
			});

			it('insert creates a right child when value is high', ()=>{
				assert.equal(rootNode.rightChild.value, 12);
			});
		});

		describe('Remove', ()=>{
			it('remove targeted left child', ()=>{
				rootNode.remove(7);
				assert.equal(rootNode.leftChild, 3)
			}
			);

			it('remove targeted right child', ()=>{
					rootNode.remove(3);
					assert.equal(rootNode.rightChild, 16)
				}
			)
		});

		describe('Traverse', ()=>{
			it(' in-order', ()=>{
				var nodesInOrder = rootNode.traverseInOrder();
				assert(nodesInOrder, sampleArray.sort())
			});

			it(' pre-order', ()=>{
				var nodesInOrder = rootNode.traverseInOrder();
				assert(nodesInOrder, sampleArray.sort())
			});

			it(' post-order', ()=>{
				var nodesInOrder = rootNode.traverseInOrder();
				assert(nodesInOrder, sampleArray.sort())
			})
		})



	});
});