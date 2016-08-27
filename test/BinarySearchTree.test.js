///<reference path='../typings/index'/>
"use strict";
var assert = require('assert');
var Node_BST_1 = require('../BinarySearchTree/Node_BST');
describe('Binary Search Tree', function () {
    describe('Node', function () {
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
        beforeEach('some description', function () {
            node = new Node_BST_1["default"](initValue);
            node.insert(lowerValue);
            node.insert(higherValue);
        });
        describe('Initialization', function () {
            it('should contain value field as a reader', function () {
                assert.equal(initValue, node.value);
            });
        });
        describe('Insert', function () {
            it('insert creates a left child when value is lower', function () {
                assert.equal(node.leftChild.value, lowerValue);
            });
            it('insert creates a right child when value is high', function () {
                assert.equal(node.rightChild.value, higherValue);
            });
        });
        describe('Remove', function () {
            it('remove targeted left child');
            it('remove targeted right child');
        });
    });
});
//# sourceMappingURL=BinarySearchTree.test.js.map