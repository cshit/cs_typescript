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
    };
    NodeBST.prototype.traverseInOrder = function () {
        var array = typeof arguments[0] == 'undefined' ? [] : arguments[0];
        if (this.leftChild)
            this.leftChild.traverseInOrder(array);
        console.log(this.value);
        array.push(this.value);
        if (this.rightChild)
            this.rightChild.traverseInOrder(array);
        return array;
    };
    return NodeBST;
}());
exports.__esModule = true;
exports["default"] = NodeBST;
//# sourceMappingURL=Node_BST.js.map