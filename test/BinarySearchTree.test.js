///<reference path='../typings/index'/>
"use strict";
var assert = require('assert');
var Node_BST_1 = require('../BinarySearchTree/Node_BST');
describe('Binary Search Tree', function () {
    describe('Node', function () {
        var node;
        var initValue = 10;
        var difference = 5;
        beforeEach('some description', function () {
            node = new Node_BST_1["default"](initValue);
        });
        describe('Initialization', function () {
            it('should contain value field as a reader', function () {
                assert.equal(initValue, node.value);
            });
        });
        describe('Insertion', function () {
            it('insert creates a left child when value is lower', function () {
                var newValue = initValue - difference;
                node.insert(newValue);
                assert.equal(node.leftChild.value, newValue);
            });
            it('insert creates a right child when value is high', function () {
                var newValue = initValue + difference;
                node.insert(newValue);
                assert.equal(node.rightChild.value, newValue);
            });
        });
    });
});
//# sourceMappingURL=BinarySearchTree.test.js.map