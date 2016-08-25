export interface INodeBST
{
	value: any;
	leftChild: INodeBST;
	rightChild: INodeBST;

	insert(value: any): void;
	minValue(): any;
	remove(value): void;
	traverseInOrder(): any[];

}

export interface IBinarySearchTree
{
	rootNode: INodeBST;

	remove(): void;
	getMax(): any;
	getMin(): any;
	traverseInOrder(): any[];
}



