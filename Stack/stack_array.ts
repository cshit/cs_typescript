import {IStack} from './Interface.d.ts'

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

	push(value:any):void
	{
		this.stack.push(value);
	}

	pop():any
	{
		return this.stack.pop()
	}

	size():number
	{
		return this.stack.length
	}

	peek(): any
	{
		return this.stack[this.size()-1]
	}
}