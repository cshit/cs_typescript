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
        console.log(this.value);
        while (currentNode.value != value) {
            if (currentNode < value) {
                currentNode = currentNode.leftChild;
            }
            else {
                currentNode = currentNode.rightChild;
            }
            prevNode = currentNode;
        }
        console.log(currentNode);
        console.log(prevNode);
        if (currentNode.rightChild == null && currentNode.leftChild == null) {
            if (prevNode.rightChild.value == value) {
                currentNode.rightChild = null;
            }
            else {
                currentNode.leftChild = null;
            }
        }
        if (currentNode.leftChild) {
            prevNode.leftChild = currentNode.leftChild;
        }
        else {
            prevNode.rightChild = currentNode.rightChild;
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
exports.__esModule = true;
exports["default"] = NodeBST;
//# sourceMappingURL=Node_BST.js.map