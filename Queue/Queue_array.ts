import {IQueue} from "./Interfaces";

export class QueueArray implements IQueue
{
	queue:any;

	constructor()
	{
		this.queue = [];
	}

	isEmpty():boolean
	{
		return this.queue.length == 0;
	}

	enqueue(data:any):void
	{
		this.queue.push(data);

		return null
	}

	dequeue(data:any):void
	{
		this.queue.shift()
	}

	size():number
	{
		return this.queue.length;
	}
}