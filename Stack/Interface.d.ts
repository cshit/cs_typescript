export interface IStack
{
	stack: any;
	numOfItems: number;

	isEmpty(): boolean;
	push(value: any): void;
	pop(): any;
	size(): number;
	peek(): any;
}