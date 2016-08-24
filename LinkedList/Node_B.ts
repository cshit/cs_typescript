import {INode} from "./Interfaces.d";

export class LNode implements INode
{

	value:any;
	next:LNode;

	constructor(value:any)
	{
		this.value = value;
		this.next = null;
	}

	remove(value:any, previousNode:INode): void
	{
		var n = this;
		if(n.value == value)
		{
			previousNode.next = n.next;
		}
		else
		{ // In case user passed value does not match... look for it.
			if(n.next != null){
				n.next.remove(value, n)
			}

		}
	}
}
