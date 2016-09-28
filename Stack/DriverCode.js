"use strict";
var stack_array_1 = require("./stack_array");
var stack_linked_list_1 = require("./stack_linked_list");
// Driver Code for SatckArray
console.log("----------TESTING StackArray----------");
var stack = new stack_array_1.StackArray();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('Size:', stack.size());
console.log(stack.pop());
console.log(stack.pop());
console.log('Size:', stack.size());
// console.log(stack.pop())
// console.log(stack.size())
console.log("---------- END OF TEST ----------");
console.log('');
console.log("----------TESTING StackLinkedList----------");
var stackLinkedList = new stack_linked_list_1.StackLinkedList();
stackLinkedList.push(1);
stackLinkedList.push(2);
stackLinkedList.push(3);
stackLinkedList.push(4);
stackLinkedList.push(5);
stackLinkedList.push(6);
// console.log('Size:', stack.size());
console.log(stackLinkedList.traverseTheStack());
stackLinkedList.pop();
stackLinkedList.pop();
//
console.log(stackLinkedList.traverseTheStack());
// console.log(stackLinkedList.pop());
// console.log(stackLinkedList.pop());
// console.log('Size:', stackLinkedList.size());
// console.log(stack.pop())
// console.log(stack.size()) 
//# sourceMappingURL=DriverCode.js.map