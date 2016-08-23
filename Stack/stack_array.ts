import {IStack} from './Interface'

export class StackArray implements IStack
{

	stack:any;
	numOfItems:number;

	constructor()
	{
		this.stack = [];
		this.numOfItems = 0;
	}

	isEmpty():boolean
	{
		return this.stack.length == 0
	}

	push(data:any):void
	{
		this.stack.push(data);
	}

	pop():any
	{
		return this.stack.pop()
	}

	size():number
	{
		return this.stack.length
	}
}