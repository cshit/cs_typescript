export interface IQueue
{
	queue: any;
	isEmpty():boolean;
	enqueue(data:any):void;
	dequeue():any;
	size():number
}