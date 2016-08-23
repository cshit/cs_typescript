/*
* Singly linked list
* With LinkList class
* */

// Typing the Node
interface INode{
	data: any;
	next: INode;
	remove(data: any, previousNode: INode): void;
}

class LNode implements INode{
	data:any;
	next:LNode;

	constructor(data:any)
	{
		this.data = data;
		this.next = null;
	}

	remove(data:any, previousNode:INode)
	{
		var n = this;
		if(n.data == data){
			previousNode.next = n.next;
		}else{ // In case user passed data does not match... look for it.
			if(n.next != null){
				n.next.remove(data, n)
			}

		}
	}
}

interface ILinkedList{
	head: INode;
	counter: number;

	insertStart(data:any):void;
	size():number;
	traverseList():void;
	insertEnd(data:any):void;
	remove(data:any):void;
}


class LinkedList implements ILinkedList{
	counter:number;
	head:INode;

	constructor()
	{
		this.head = null;
		this.counter = 0;
	}

	insertStart(data:any):void
	{
		var newNode = new LNode(data);

		//	if there si no head create, if there is head then add node and make it the head
		if(this.head)
		{
			newNode.next = this.head;
			this.head = newNode;
			this.counter++;
		}
		else
		{
			this.head = newNode;
			this.counter++;
		}
	}

	size():number
	{
		return this.counter
	}

	traverseList():void
	{
		var actualNode = this.head;
		var printedList = '';

		while(actualNode != null)
		{
			printedList = printedList + actualNode.data + ' -> ';
			actualNode = actualNode.next;
		}

		console.log(printedList);
	}

	insertEnd(data:any):void
	{
		var actualNode = this.head;
		var newNode =  new LNode(data);

		while(actualNode.next != null)
		{
			actualNode = actualNode.next
		}

		actualNode.next = newNode
		this.counter++;
	}

	remove(data:any):void
	{
		if(this.head.data == data)
		{
			let newHead = this.head.next;
			this.head = newHead;
			this.counter--;
		}
		else
		{
			this.head.next.remove(data, this.head);
			this.counter--;
		}
	}
}

var linkedList = new LinkedList();

linkedList.insertStart(12);
linkedList.insertStart(2);
linkedList.insertStart('Samba');
linkedList.insertEnd(31);
console.log('Count:', linkedList.size());
linkedList.insertEnd(99);
linkedList.insertStart(100);
linkedList.remove(100);

linkedList.traverseList();
console.log('Count:',linkedList.size());

console.log('-----------');

linkedList.remove(99);
linkedList.traverseList();



// linkedList.insertStart(122);
// linkedList.insertStart(3);

//
// linkedList.traverseList();
//
// linkedList.remove(31);
// linkedList.remove(3);
// linkedList.remove(122);
//
// linkedList.traverseList();

