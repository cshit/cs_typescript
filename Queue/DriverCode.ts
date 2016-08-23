import {QueueArray} from "./Queue_array";


console.log("----------TESTING QUEUE_ARRAY----------");
var queueArray = new  QueueArray();

queueArray.enqueue('Daniel');
queueArray.enqueue('Kevin');
queueArray.enqueue('Joe');

console.log(queueArray.dequeue());
console.log(queueArray.dequeue());
console.log(queueArray.size());
console.log(queueArray.dequeue());
console.log(queueArray.size());

console.log("---------- END OF TEST ----------");
console.log('');


console.log("----------TESTING QUEUE_LINKED_LIST----------");
var queueLinkedList = new  QueueArray();

queueLinkedList.enqueue('Daniel');
queueLinkedList.enqueue('Kevin');
queueLinkedList.enqueue('Joe');

console.log(queueLinkedList.dequeue());
console.log(queueLinkedList.dequeue());
console.log(queueLinkedList.size());
console.log(queueLinkedList.dequeue());
console.log(queueLinkedList.size());

console.log("---------- END OF TEST ----------");
console.log('');