/*
* Singly linked list
* With LinkList class
* */
import {INode, ILinkedList} from './Interfaces.d'
import {LNode} from "./Node_B";

export class LinkedList implements ILinkedList
{

	counter:number;
	head:INode;

	constructor()
	{
		this.head = null;
		this.counter = 0;
	}

	insertStart(value:any):void
	{
		var newNode = new LNode(value);

		//	if there si no head create, if there is head then add node and make it the head
		if(this.head)
		{
			newNode.next = this.head;
			this.head = newNode;
			this.counter++;
		}
		else
		{
			this.head = newNode;
			this.counter++;
		}
	}

	size():number
	{
		return this.counter
	}

	traverseList():void
	{
		var actualNode = this.head;
		var printedList = '';

		while(actualNode != null)
		{
			printedList = printedList + actualNode.value + ' -> ';
			actualNode = actualNode.next;
		}

		console.log(printedList);
	}

	traverseListObject(): Object
	{
		var actualNode = this.head;
		var valueObject = {};
		var counter = 0;

		while(actualNode != null)
		{
			valueObject[counter] = actualNode.value;
			counter++;
			actualNode = actualNode.next;
		}
		
		return valueObject
	}



	insertEnd(value:any):void
	{
		var actualNode = this.head;
		var newNode =  new LNode(value);

		while(actualNode.next != null)
		{
			actualNode = actualNode.next
		}

		actualNode.next = newNode;
		this.counter++;
	}

	remove(value:any):void
	{
		if(this.head.value == value)
		{
			this.head = this.head.next;
			this.counter--;
		}
		else
		{
			this.head.remove(value, this.head);
			this.counter--;
		}
	}
}