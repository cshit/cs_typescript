"use strict";
var LinkedList_B_1 = require("../LinkedList/LinkedList_B");
var QueueLinkedList = (function () {
    function QueueLinkedList() {
        this.queue = new LinkedList_B_1.LinkedList();
    }
    QueueLinkedList.prototype.isEmpty = function () {
        return this.queue.size() == 0;
    };
    QueueLinkedList.prototype.enqueue = function (data) {
        this.queue.insertEnd(data);
    };
    QueueLinkedList.prototype.dequeue = function () {
        var dataToReturn = this.queue.head.data;
        this.queue.remove(dataToReturn);
    };
    QueueLinkedList.prototype.size = function () {
        return this.queue.size();
    };
    return QueueLinkedList;
}());
exports.QueueLinkedList = QueueLinkedList;
//# sourceMappingURL=Queue_linked_list.js.map