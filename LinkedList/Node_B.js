"use strict";
var LNode = (function () {
    function LNode(value) {
        this.value = value;
        this.next = null;
    }
    LNode.prototype.remove = function (value, previousNode) {
        var n = this;
        if (n.value == value) {
            previousNode.next = n.next;
        }
        else {
            if (n.next != null) {
                n.next.remove(value, n);
            }
        }
    };
    return LNode;
}());
exports.LNode = LNode;
//# sourceMappingURL=Node_B.js.map