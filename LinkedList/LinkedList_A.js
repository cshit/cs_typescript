/*
* Singly linked list
* Simplest implementation possible
* No LinkList class just nodes
* */
"use strict";
var LLNode = (function () {
    function LLNode(value) {
        this.value = value;
        this.next = null;
    }
    // chainable method to append nodes
    LLNode.prototype.appendToTail = function (value) {
        var end = new LLNode(value);
        var n = this;
        while (n.next != null) {
            n = n.next;
        }
        n.next = end;
        return n.next;
    };
    LLNode.prototype.remove = function (value) {
        // find the value match
        // save previous and post
        // connect them and remove this node
    };
    return LLNode;
}());
exports.LLNode = LLNode;
//# sourceMappingURL=LinkedList_A.js.map