/*
* Stack Min:
* How would you design a stack witch, in addition to push and pop, has a function min witch returns
* the min element. Push, Pop and min should all operate in 0(1) time.
*/


import {StackArray} from "../Stack_array";
class StackMin extends StackArray
{
	s2: StackArray;
	constructor(){
		super();
		this.s2 = new StackArray();
	}

	push(value:any):void
	{
		if(value <= this.min())
		{
			this.s2.push(value)
		}

		super.push(value);
	}

	pop():any
	{
		var data = super.pop();
		if(data == this.min())
		{
			this.s2.pop()
		}
	}

	min(): number
	{
		if(this.s2.isEmpty())
		{
			return Number.MAX_VALUE;
		}
		else
		{
			return this.s2.peek()
		}
	}

}

// Prove it!
var stackMin = new StackMin();

stackMin.push(10);
stackMin.push(9);
stackMin.push(8);
stackMin.push(10);
stackMin.push(9);

console.log(stackMin.stack);
console.log(stackMin.s2.stack);

console.log(stackMin.min() == 8);
