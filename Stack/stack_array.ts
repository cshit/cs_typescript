interface IStack
{
	stack: any;
	numOfItems: number;

	isEmpty(): boolean;
	push(data: any): void;
	pop(): any;
	size(): number;
}


class Stack implements IStack
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


// Driver Code

var stack = new Stack();
//
stack.push(1);
stack.push(2);
stack.push(3);
console.log('Size:', stack.size());


console.log(stack.pop());
console.log(stack.pop());
console.log('Size:', stack.size());
// console.log(stack.pop())
// console.log(stack.size())