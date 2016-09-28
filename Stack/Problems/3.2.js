/*
* Stack Min:
* How would you design a stack witch, in addition to push and pop, has a function min witch returns
* the min element. Push, Pop and min should all operate in 0(1) time.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var stack_array_1 = require("../stack_array");
var StackMin = (function (_super) {
    __extends(StackMin, _super);
    function StackMin() {
        _super.call(this);
        this.s2 = new stack_array_1.StackArray();
    }
    StackMin.prototype.push = function (value) {
        if (value <= this.min()) {
            this.s2.push(value);
        }
        _super.prototype.push.call(this, value);
    };
    StackMin.prototype.pop = function () {
        var data = _super.prototype.pop.call(this);
        if (data == this.min()) {
            this.s2.pop();
        }
    };
    StackMin.prototype.min = function () {
        if (this.s2.isEmpty()) {
            return Number.MAX_VALUE;
        }
        else {
            return this.s2.peek();
        }
    };
    return StackMin;
}(stack_array_1.StackArray));
// Prove it!
var stackMin = new StackMin();
stackMin.push(10);
stackMin.push(9);
stackMin.push(8);
stackMin.push(10);
stackMin.push(9);
console.log(stackMin.stack);
console.log(stackMin.s2.stack);
console.log(stackMin.min() == 8);
//# sourceMappingURL=3.2.js.map