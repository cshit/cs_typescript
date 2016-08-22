/*
* Singly linked list
* Simplest implementation possible
* No LinkList class just nodes
* */

// Typing the Node
interface INode{
	data: any;
	nextNode: INode;
	appendToTail(data:any): INode;
}


class LNode implements INode{
	data: any;
	nextNode: INode;

	constructor(data: any){
		this.data = data;
		this.nextNode = null;
	}

	// chainable method to append nodes
	appendToTail(data: any): INode{
		var end: INode = new LNode(data);
		var n: INode = this;

		while(n.nextNode != null){
			n = n.nextNode;
		}

		n.nextNode = end;

		return n.nextNode;
	}

}

var n0 = new LNode("YEAH");
n0.appendToTail(1).appendToTail(2);

console.log(n0);