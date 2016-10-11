export interface INodeAVL
{
	value: number;
	parentNode: INodeAVL;
	leftChild: INodeAVL;
	rightChild: INodeAVL;
	balance: number;

	insert(value:number, parentNode:INodeAVL):INodeAVL;
	traverseInOrder():void;

}

export interface IAvl
{
	insert():void
	getMax():INodeAVL
	getMin():INodeAVL
	traverseInOrder():void
	rebalanceTree():void
	rotateLeftRight():void
	rotateRightLeft():void
	rotateLeft():void
	rotateRight():void
	setBalance():void
	height():number
}
