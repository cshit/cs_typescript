/*
* Singly linked list
* Simplest implementation possible
* No LinkList class just nodes
* */

// Typing the Node
interface INode{
	data: any;
	next: INode;
	appendToTail(data:any): INode;
}

class LNode implements INode{
	data: any;
	next: LNode;

	constructor(data: any){
		this.data = data;
		this.next = null;
	}

	// chainable method to append nodes
	appendToTail(data: any): INode{
		var end: INode = new LNode(data);
		var n: INode = this;

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

var n0 = new LNode("YEAH");
n0.appendToTail(1).appendToTail(2);

console.log(n0);