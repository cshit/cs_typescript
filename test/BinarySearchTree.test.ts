///<reference path='../typings/index'/>

var assert = require('assert');

import NodeBST from '../BinarySearchTree/Node_BST'

describe('Binary Search Tree', ()=>{
	describe('Node', ()=>{
		
		var node;
		var initValue = 10;
		var difference = 5;

		beforeEach('some description', ()=>{
			node = new NodeBST(initValue);
		});

		describe('Initialization', ()=>{
			it('should contain value field as a reader', ()=>{
				assert.equal(initValue, node.value);
			});
		});

		describe('Insertion', ()=>{
			it('insert creates a left child when value is lower', ()=>{
				var newValue = initValue - difference;
				node.insert(newValue);
				assert.equal(node.leftChild.value, newValue);
			});

			it('insert creates a right child when value is high', ()=>{
				var newValue = initValue + difference;
				node.insert(newValue);
				assert.equal(node.rightChild.value, newValue);
			});
		})

	});
});