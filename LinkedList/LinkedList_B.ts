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

	insertStart(data:any):void
	{
		var newNode = new LNode(data);

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
			printedList = printedList + actualNode.data + ' -> ';
			actualNode = actualNode.next;
		}

		console.log(printedList);
	}

	traverseListObject(): Object
	{
		var actualNode = this.head;
		var dataObject = {};
		var counter = 0;

		while(actualNode != null)
		{
			dataObject[counter] = actualNode.data;
			counter++;
			actualNode = actualNode.next;
		}
		
		return dataObject
	}



	insertEnd(data:any):void
	{
		var actualNode = this.head;
		var newNode =  new LNode(data);

		while(actualNode.next != null)
		{
			actualNode = actualNode.next
		}

		actualNode.next = newNode;
		this.counter++;
	}

	remove(data:any):void
	{
		if(this.head.data == data)
		{
			this.head = this.head.next;
			this.counter--;
		}
		else
		{
			this.head.remove(data, this.head);
			this.counter--;
		}
	}
}