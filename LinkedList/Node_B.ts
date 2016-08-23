import {INode} from "./Interfaces";

export class LNode implements INode
{

	data:any;
	next:LNode;

	constructor(data:any)
	{
		this.data = data;
		this.next = null;
	}

	remove(data:any, previousNode:INode): void
	{
		var n = this;
		if(n.data == data){
			previousNode.next = n.next;
		}else{ // In case user passed data does not match... look for it.
			if(n.next != null){
				n.next.remove(data, n)
			}

		}
	}
}
