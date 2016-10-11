import {INodeAVL} from "./Interfaces";
export default class AVLNode implements INodeAVL{

	value:number;
	parentNode:INodeAVL;
	leftChild:INodeAVL;
	rightChild:INodeAVL;
	balance:number;

	constructor(
		value:number,
		parentNode:INodeAVL,
		leftChild?:INodeAVL,
		rightChild?:INodeAVL,
		balance?:number)
	{
		this.value = value;
		this.parentNode = parentNode;
		this.leftChild = null;
		this.rightChild = null;
		this.balance = 0;
	}

	insert(value:number, parentNode:INodeAVL):INodeAVL
	{
		if(parentNode.value > value)
		{
			if(parentNode.rightChild)
			{
				this.rightChild.insert(value, parentNode);
			}
			else
			{
				parentNode.rightChild = new AVLNode(value, parentNode)
			}

		}
		else
		{
			if(parentNode.leftChild)
			{
				this.leftChild.insert(value, parentNode)
			}
			else
			{
				parentNode.leftChild = new AVLNode(value, parentNode)
			}
		}

		return parentNode;
	}

	traverseInOrder():void
	{
		if(this.leftChild)
			this.leftChild.traverseInOrder();

		console.log(this.value);

		if(this.rightChild)
			this.rightChild.traverseInOrder()
	}
	
} 
