"use strict";
var LinkedList_B_1 = require("../LinkedList/LinkedList_B");
var StackLinkedList = (function () {
    function StackLinkedList() {
        this.stack = new LinkedList_B_1.LinkedList();
        this.numOfItems = 0;
    }
    StackLinkedList.prototype.isEmpty = function () {
        return this.stack.counter == 0;
    };
    StackLinkedList.prototype.push = function (value) {
        this.numOfItems++;
        this.stack.insertStart(value);
    };
    StackLinkedList.prototype.pop = function () {
        var data = this.stack.head.data;
        this.stack.remove(data);
        this.numOfItems--;
        return data;
    };
    StackLinkedList.prototype.size = function () {
        return this.stack.counter;
    };
    StackLinkedList.prototype.traverseTheStack = function () {
        this.stack.traverseList();
        return null;
    };
    return StackLinkedList;
}());
exports.StackLinkedList = StackLinkedList;
//# sourceMappingURL=Stack_linked_list.js.map