export interface ILNode
{
	value: any;
	next: ILNode;
	appendToTail(value:any): ILNode;
}

export interface INode  
{
	value: any;
	next: INode;
	remove(value: any, previousNode: INode): void;
}

export interface ILinkedList
{
	head: INode;
	counter: number;
	insertStart(value:any):void;
	size():number;
	traverseList():void;
	insertEnd(value:any):void;
	remove(value:any):void;
}