import {IQueue} from "./Interfaces";
import {LinkedList} from "../LinkedList/LinkedList_B";
import {ILinkedList} from "../LinkedList/Interfaces";

export class QueueLinkedList implements IQueue
{
	queue:ILinkedList;
	
	constructor()
	{
		this.queue = new LinkedList();	
	}

	isEmpty():boolean
	{
		return this.queue.size() == 0;
	}

	enqueue(data:any):void
	{
		this.queue.insertEnd(data);
	}

	dequeue():void
	{
		var dataToReturn = this.queue.head.data;
		this.queue.remove(dataToReturn);
	}

	size():number
	{
		return this.queue.size();
	}
}