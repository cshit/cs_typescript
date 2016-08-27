import {INodeBST} from "./Interfaces";

export default class NodeBST implements INodeBST
{

	value:any;
	leftChild:INodeBST;
	rightChild:INodeBST;
	
	constructor(value: any){
		this.value = value;
		this.leftChild = null;
		this.rightChild = null;
	}

	insert(value:any):void
	{

		if(value < this.value)
		{
			if(this.leftChild)
			{
				this.leftChild.insert(value)
			}
			else
			{
				this.leftChild = new NodeBST(value);
			}
		}
		else
		{
			if(this.rightChild)
			{
				this.rightChild.insert(value)
			}
			else
			{
				this.rightChild = new NodeBST(value);
			}
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
		var currentNode: NodeBST = this;
		var prevNode: NodeBST;

		console.log(this.value);

		while(currentNode.value != value)
		{
			if(currentNode < value)
			{
				currentNode = currentNode.leftChild;
			}
			else
			{
				currentNode = currentNode.rightChild;
			}

			prevNode = currentNode
		}

		console.log(currentNode);
		console.log(prevNode);

		if(currentNode.rightChild == null && currentNode.leftChild == null)
		{
			if(prevNode.rightChild.value == value)
			{
				currentNode.rightChild = null
			}
			else
			{
				currentNode.leftChild = null
			}
		}
		
		if(currentNode.leftChild)
		{
			prevNode.leftChild = currentNode.leftChild
		}
		else
		{
			prevNode.rightChild = currentNode.rightChild
		}
			
	}

	traverseInOrder():any[]
	{
		var array = typeof arguments[0] == 'undefined' ? [] : arguments[0];

		if(this.leftChild)
			this.leftChild.traverseInOrder(array);

		console.log(this.value);
		array.push(this.value);

		if (this.rightChild)
			this.rightChild.traverseInOrder(array);

		return array
	}

	traversePreOrder():any[]
	{
		var array = typeof arguments[0] == 'undefined' ? [] : arguments[0];

		console.log(this.value);
		array.push(this.value);

		if(this.leftChild)
			this.leftChild.traversePreOrder(array);
		if (this.rightChild)
			this.rightChild.traversePreOrder(array);

		return array
	}

		traversePostOrder():any[]
	{
		var array = typeof arguments[0] == 'undefined' ? [] : arguments[0];

		if(this.leftChild)
			this.leftChild.traversePreOrder(array);
		if (this.rightChild)
			this.rightChild.traversePreOrder(array);

		console.log(this.value);
		array.push(this.value);

		return array
	}
}