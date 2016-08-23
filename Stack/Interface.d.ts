export interface IStack
{
	stack: any;
	numOfItems: number;

	isEmpty(): boolean;
	push(data: any): void;
	pop(): any;
	size(): number;
}