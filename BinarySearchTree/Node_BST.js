"use strict";
var NodeBST = (function () {
    function NodeBST(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
    NodeBST.prototype.insert = function (value) {
        if (value < this.value) {
            this.leftChild = new NodeBST(value);
        }
        else {
            this.rightChild = new NodeBST(value);
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
        return undefined;
    };
    return NodeBST;
}());
exports.__esModule = true;
exports["default"] = NodeBST;
//# sourceMappingURL=Node_BST.js.map