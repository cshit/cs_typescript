import NodeBST from "./Node_BST";

var bsn = new NodeBST(10);

[1,2,4,7,9,14,18,19,20].forEach((val)=>{bsn.insert(val)});

// console.log(bsn);
console.log(bsn.traverseInOrder());