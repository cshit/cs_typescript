/*
* Singly linked list
* Simplest implementation possible
* No LinkList class just nodes
* */

import {ILNode} from './Interfaces.d'

export class LLNode implements ILNode{
	data: any;
	next: LLNode;

	constructor(data: any){
		this.data = data;
		this.next = null;
	}

	// chainable method to append nodes
	appendToTail(data: any): ILNode{
		var end: ILNode = new LLNode(data);
		var n: ILNode = this;

		while(n.next != null){
			n = n.next;
		}

		n.next = end;

		return n.next;
	}

	remove(data: any){
		// find the data match
		// save previous and post
		// connect them and remove this node
	}
}