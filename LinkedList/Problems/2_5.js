/*
* Sum Lists:
* You have given two numbers represented by a linked list, where each node contains a single
* digit. The digits are stored in reverse order, such us the first digit is at the head of the list.
* Write a function that adds the two numbers and returns the sum as a linked list.
*
* Input: (7 -> 1 -> 6) + (5 -> 9 -> 2)
* Output: 2  -> 1  ->  9
*/
"use strict";
var LinkedList_B_1 = require("../LinkedList_B");
/*
* Linked List Factory
*/
function createLinkedListFromNumber(num) {
    var numArray = num.toString().split('');
    var linkedList = new LinkedList_B_1.LinkedList();
    numArray.forEach(function (digit) {
        linkedList.insertStart(digit);
    });
    return linkedList;
}
/*
* Iterative Approach
*/
function createNumberFromLinkListIterative(linkList) {
    var dataObject = linkList.traverseListObject();
    var numberInString = '';
    for (var key in dataObject) {
        if (dataObject.hasOwnProperty(key)) {
            numberInString += dataObject[key];
        }
    }
    var reversedNumberString = numberInString.split('').reverse().join('');
    return parseInt(reversedNumberString);
}
/*
* Recursive Approach
*/
function createNumberFromLinkListRecursive(linkList) {
    var head = linkList.head;
    // Implement the recursive way from the head down
    // using the stack on the way back if possible
    return 999;
}
/*
* Add Two Linked Lists sing any of the approaches
*/
function addTwoLinkList(ll1, ll2, approach) {
    var ll1Number = approach(ll1);
    var ll2Number = approach(ll2);
    return createLinkedListFromNumber(ll1Number + ll2Number);
}
// Iterative solution:
var ll1 = createLinkedListFromNumber(617);
var ll2 = createLinkedListFromNumber(295);
ll1.traverseList();
ll2.traverseList();
addTwoLinkList(ll1, ll2, createNumberFromLinkListIterative).traverseList();
//# sourceMappingURL=2_5.js.map