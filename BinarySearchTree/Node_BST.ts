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
		var currentNode: INodeBST = this;
		var prevNode: INodeBST;
		var direction: string = '';

		while(currentNode.value != value)
		{
			prevNode = currentNode;
			
			if(currentNode.value < value)
			{
				direction = 'right';
				currentNode = currentNode.rightChild;
			}
			else
			{
				direction = 'left';
				currentNode = currentNode.leftChild;
			}
		}
		
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
		else if(currentNode.leftChild)
		{
			console.log('left');
			if(direction == 'left')
			{
				prevNode.leftChild = currentNode.leftChild
			}
			else
			{
				prevNode.rightChild = currentNode.leftChild
			}
		}
		else if (currentNode.rightChild)
		{
			console.log('right');
			if(direction == 'right')
			{
				prevNode.rightChild = currentNode.rightChild
			}
			else
			{
				prevNode.leftChild = currentNode.rightChild
			}

		}
			
	}

	traverseInOrder():any[]
	{
		// argument for internal use in recursive execution
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