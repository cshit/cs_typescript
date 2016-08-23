export interface ILNode
{
	data: any;
	next: ILNode;
	appendToTail(data:any): ILNode;
}

export interface INode  
{
	data: any;
	next: INode;
	remove(data: any, previousNode: INode): void;
}

export interface ILinkedList
{
	head: INode;
	counter: number;
	insertStart(data:any):void;
	size():number;
	traverseList():void;
	insertEnd(data:any):void;
	remove(data:any):void;
}