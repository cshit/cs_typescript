export interface IQueue
{
	queue: any;
	isEmpty():boolean;
	enqueue(data:any):void;
	dequeue(data:any):void;
	size():number
}