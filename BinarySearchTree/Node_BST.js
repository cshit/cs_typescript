"use strict";
var NodeBST = (function () {
    function NodeBST(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
    NodeBST.prototype.insert = function (value) {
        if (value < this.value) {
            if (this.leftChild) {
                this.leftChild.insert(value);
            }
            else {
                this.leftChild = new NodeBST(value);
            }
        }
        else {
            if (this.rightChild) {
                this.rightChild.insert(value);
            }
            else {
                this.rightChild = new NodeBST(value);
            }
        }
    };
    NodeBST.prototype.minValue = function () {
        var node = this;
        while (node.leftChild != null) {
            node = node.leftChild;
        }
        return node.value;
    };
    NodeBST.prototype.remove = function (value) {
        var currentNode = this;
        var prevNode;
        var direction = '';
        while (currentNode.value != value) {
            prevNode = currentNode;
            if (currentNode.value < value) {
                direction = 'right';
                currentNode = currentNode.rightChild;
            }
            else {
                direction = 'left';
                currentNode = currentNode.leftChild;
            }
        }
        if (currentNode.rightChild == null && currentNode.leftChild == null) {
            if (direction == 'right') {
                prevNode.rightChild = null;
            }
            else {
                prevNode.leftChild = null;
            }
        }
        else if (currentNode.leftChild) {
            console.log('left');
            if (direction == 'left') {
                prevNode.leftChild = currentNode.leftChild;
            }
            else {
                prevNode.rightChild = currentNode.leftChild;
            }
        }
        else if (currentNode.rightChild) {
            console.log('right');
            if (direction == 'right') {
                prevNode.rightChild = currentNode.rightChild;
            }
            else {
                prevNode.leftChild = currentNode.rightChild;
            }
        }
    };
    NodeBST.prototype.traverseInOrder = function () {
        // argument for internal use in recursive execution
        var array = typeof arguments[0] == 'undefined' ? [] : arguments[0];
        if (this.leftChild)
            this.leftChild.traverseInOrder(array);
        console.log(this.value);
        array.push(this.value);
        if (this.rightChild)
            this.rightChild.traverseInOrder(array);
        return array;
    };
    NodeBST.prototype.traversePreOrder = function () {
        var array = typeof arguments[0] == 'undefined' ? [] : arguments[0];
        console.log(this.value);
        array.push(this.value);
        if (this.leftChild)
            this.leftChild.traversePreOrder(array);
        if (this.rightChild)
            this.rightChild.traversePreOrder(array);
        return array;
    };
    NodeBST.prototype.traversePostOrder = function () {
        var array = typeof arguments[0] == 'undefined' ? [] : arguments[0];
        if (this.leftChild)
            this.leftChild.traversePreOrder(array);
        if (this.rightChild)
            this.rightChild.traversePreOrder(array);
        console.log(this.value);
        array.push(this.value);
        return array;
    };
    return NodeBST;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NodeBST;
//# sourceMappingURL=Node_BST.js.map