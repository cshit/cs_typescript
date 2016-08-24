/*
* Singly linked list
* Simplest implementation possible
* No LinkList class just nodes
* */

import {ILNode} from './Interfaces.d'

export class LLNode implements ILNode
{
	value: any;
	next: LLNode;

	constructor(value: any)
	{
		this.value = value;
		this.next = null;
	}

	// chainable method to append nodes
	appendToTail(value: any): ILNode
	{
		var end: ILNode = new LLNode(value);
		var n: ILNode = this;

		while(n.next != null){
			n = n.next;
		}

		n.next = end;

		return n.next;
	}

	remove(value: any): void
	{
		// find the value match
		// save previous and post
		// connect them and remove this node
		
	}
}