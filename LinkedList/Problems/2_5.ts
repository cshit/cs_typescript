/*
* Sum Lists:
* You have given two numbers represented by a linked list, where each node contains a single
* digit. The digits are stored in reverse order, such us the first digit is at the head of the list.
* Write a function that adds the two numbers and returns the sum as a linked list.
*
* Input: (7 -> 1 -> 6) + (5 -> 9 -> 2)
* Output: 2  -> 1  ->  9
*/

import {LinkedList} from "../LinkedList_B";

/*
* Linked List Factory
*/
function createLinkedListFromNumber(num: number)
{
	var numArray = num.toString().split('');
	var linkedList = new LinkedList();

	numArray.forEach((digit) => {
		linkedList.insertStart(digit)
	});

	return linkedList
}

/*
* Iterative Approach
*/
function createNumberFromLinkListIterative(linkList: LinkedList): number
{
	var dataObject = linkList.traverseListObject();
	var numberInString = '';

	for(let key in dataObject)
	{
		if(dataObject.hasOwnProperty(key))
		{
			numberInString += dataObject[key];
		}
	}

	var reversedNumberString = numberInString.split('').reverse().join('');

	return parseInt(reversedNumberString)
}

/*
* Recursive Approach
*/
function createNumberFromLinkListRecursive(linkList: LinkedList): number
{
	var head = linkList.head;
	// Implement the recursive way from the head down
	// using the stack on the way back if possible

	return 999
}

/*
* Add Two Linked Lists sing any of the approaches
*/
function addTwoLinkList(ll1: LinkedList, ll2: LinkedList, approach: Function)
{
	var  ll1Number = approach(ll1);
	var  ll2Number = approach(ll2);

	return createLinkedListFromNumber(ll1Number + ll2Number)
}


// Iterative solution:
var ll1 = createLinkedListFromNumber(617);
var ll2 = createLinkedListFromNumber(295);

ll1.traverseList();
ll2.traverseList();

addTwoLinkList(ll1, ll2, createNumberFromLinkListIterative).traverseList();