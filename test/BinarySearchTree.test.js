///<reference path='../typings/index'/>
"use strict";
var assert = require('assert');
var Node_BST_1 = require('../BinarySearchTree/Node_BST');
describe('Binary Search Tree', function () {
    describe('Node', function () {
        var rootNode;
        var initValue = 10;
        var sampleArray = [12, 7, 8, 3, 2, 4, 1, 19, 18, 16, 20, 6, 15, 11, 9];
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
        beforeEach('some description', function () {
            rootNode = new Node_BST_1.default(10);
            sampleArray.forEach(function (val) { rootNode.insert(val); });
        });
        describe('Initialization', function () {
            it('should contain value field as a reader', function () {
                assert.equal(initValue, rootNode.value);
            });
        });
        describe('Insert', function () {
            it('insert creates a left child when value is lower', function () {
                assert.equal(rootNode.leftChild.value, 7);
            });
            it('insert creates a right child when value is high', function () {
                assert.equal(rootNode.rightChild.value, 12);
            });
        });
        describe('Remove', function () {
            it('remove targeted left child', function () {
                rootNode.remove(7);
                assert.equal(rootNode.leftChild.value, 3);
            });
            it('remove targeted right child', function () {
                rootNode.remove(12);
                assert.equal(rootNode.rightChild.value, 11);
            });
        });
        describe('Traverse', function () {
            it(' in-order', function () {
                var nodesInOrder = rootNode.traverseInOrder();
                assert(nodesInOrder, sampleArray.sort());
            });
            it(' pre-order', function () {
                var nodesInOrder = rootNode.traverseInOrder();
                assert(nodesInOrder, sampleArray.sort());
            });
            it(' post-order', function () {
                var nodesInOrder = rootNode.traverseInOrder();
                assert(nodesInOrder, sampleArray.sort());
            });
        });
    });
});
//# sourceMappingURL=BinarySearchTree.test.js.map