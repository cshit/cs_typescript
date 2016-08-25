import {INodeBST} from "./Interfaces";

export default class NodeBST implements INodeBST
{
	value:any;
	leftChild:INodeBST;
	rightChild:INodeBST;
	
	constructor(value: any){
		this.value = value;
		this.leftChild = null;
		this.rightChild= null;
	}

	insert(value:any):void
	{
		if(value < this.value)
		{
			this.leftChild = new NodeBST(value);
		}
		else
		{
			this.rightChild = new NodeBST(value);
		}
	}

	minValue():any
	{
		var node: INodeBST = this;

		while(node.leftChild != null){
			node = node.leftChild;
		}

		return node.value;
	}

	remove(value):void
	{
	}

	traverseInOrder():any[]
	{
		return undefined;
	}
	
}