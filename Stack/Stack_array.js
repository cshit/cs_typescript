"use strict";
var StackArray = (function () {
    function StackArray() {
        this.stack = [];
        this.numOfItems = 0;
    }
    StackArray.prototype.isEmpty = function () {
        return this.stack.length == 0;
    };
    StackArray.prototype.push = function (value) {
        this.stack.push(value);
    };
    StackArray.prototype.pop = function () {
        return this.stack.pop();
    };
    StackArray.prototype.size = function () {
        return this.stack.length;
    };
    StackArray.prototype.peek = function () {
        return this.stack[this.size() - 1];
    };
    return StackArray;
}());
exports.StackArray = StackArray;
//# sourceMappingURL=Stack_array.js.map