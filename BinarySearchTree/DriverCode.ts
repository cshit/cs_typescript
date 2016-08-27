import NodeBST from "./Node_BST";

var bsn = new NodeBST(10);

[12,7,8,3,2,4,1,19,18,16,20,6,15,11,9].forEach((val)=>{bsn.insert(val)});

// console.log(bsn);
console.log(bsn.traverseInOrder());
console.log(bsn.traversePreOrder());
console.log(bsn.traversePostOrder());
console.log(bsn.remove(7));
console.log(bsn.remove(12));
