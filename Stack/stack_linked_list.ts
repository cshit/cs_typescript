import {IStack} from "./interface";
import {ILinkedList} from "../LinkedList/Interfaces";
import {LinkedList} from "../LinkedList/LinkedList_B";

export class StackLinkedList implements IStack{
	stack:ILinkedList;
	numOfItems:number;

	constructor()
	{
		this.stack = new LinkedList();
		this.numOfItems = 0;
	}

	isEmpty():boolean
	{
		return this.stack.counter == 0;
	}

	push(data:any):void
	{
		this.numOfItems++;
		this.stack.insertStart(data);
	}

	pop():any
	{
		var data: any = this.stack.head.data;

		this.stack.remove(data);
		this.numOfItems--;

		return data;
	}

	size():number
	{
		return this.stack.counter;
	}
	
	traverseTheStack():void
	{
		this.stack.traverseList();

		return null
	}
}