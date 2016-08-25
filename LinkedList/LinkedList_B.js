"use strict";
var Node_B_1 = require("./Node_B");
var LinkedList = (function () {
    function LinkedList() {
        this.head = null;
        this.counter = 0;
    }
    LinkedList.prototype.insertStart = function (value) {
        var newNode = new Node_B_1.LNode(value);
        //	if there si no head create, if there is head then add node and make it the head
        if (this.head) {
            newNode.next = this.head;
            this.head = newNode;
            this.counter++;
        }
        else {
            this.head = newNode;
            this.counter++;
        }
    };
    LinkedList.prototype.size = function () {
        return this.counter;
    };
    LinkedList.prototype.traverseList = function () {
        var actualNode = this.head;
        var printedList = '';
        while (actualNode != null) {
            printedList = printedList + actualNode.value + ' -> ';
            actualNode = actualNode.next;
        }
        console.log(printedList);
    };
    LinkedList.prototype.traverseListObject = function () {
        var actualNode = this.head;
        var valueObject = {};
        var counter = 0;
        while (actualNode != null) {
            valueObject[counter] = actualNode.value;
            counter++;
            actualNode = actualNode.next;
        }
        return valueObject;
    };
    LinkedList.prototype.insertEnd = function (value) {
        var actualNode = this.head;
        var newNode = new Node_B_1.LNode(value);
        while (actualNode.next != null) {
            actualNode = actualNode.next;
        }
        actualNode.next = newNode;
        this.counter++;
    };
    LinkedList.prototype.remove = function (value) {
        if (this.head.value == value) {
            this.head = this.head.next;
            this.counter--;
        }
        else {
            this.head.remove(value, this.head);
            this.counter--;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
//# sourceMappingURL=LinkedList_B.js.map