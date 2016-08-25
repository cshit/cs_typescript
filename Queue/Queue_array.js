"use strict";
var QueueArray = (function () {
    function QueueArray() {
        this.queue = [];
    }
    QueueArray.prototype.isEmpty = function () {
        return this.queue.length == 0;
    };
    QueueArray.prototype.enqueue = function (data) {
        this.queue.push(data);
        return null;
    };
    QueueArray.prototype.dequeue = function () {
        return this.queue.shift();
    };
    QueueArray.prototype.size = function () {
        return this.queue.length;
    };
    return QueueArray;
}());
exports.QueueArray = QueueArray;
//# sourceMappingURL=Queue_array.js.map