"use strict";
var LinkedList_B_1 = require("./LinkedList_B");
var LinkedList_A_1 = require("./LinkedList_A");
// Driver Code for LinkedList A
console.log("----------TESTING LinkedList A----------");
var n0 = new LinkedList_A_1.LLNode("YEAH");
n0.appendToTail(1).appendToTail(2);
console.log(n0);
console.log("---------- END OF TEST ----------");
console.log('');
// Dirver Code for LinkedList B
console.log("----------TESTING LinkedList B----------");
var linkedList = new LinkedList_B_1.LinkedList();
linkedList.insertStart(12);
linkedList.insertStart(2);
linkedList.insertStart('Samba');
linkedList.insertEnd(31);
console.log('Count:', linkedList.size());
linkedList.insertEnd(99);
linkedList.insertStart(100);
linkedList.remove(100);
linkedList.traverseList();
console.log('Count:', linkedList.size());
console.log('-----------');
linkedList.remove(99);
linkedList.traverseList();
console.log("---------- END OF TEST ----------");
//# sourceMappingURL=driverCode.js.map