"use strict";
var Node_BST_1 = require("./Node_BST");
var bsn = new Node_BST_1["default"](10);
[1, 2, 4, 7, 9, 14, 18, 19, 20].forEach(function (val) { bsn.insert(val); });
// console.log(bsn);
console.log(bsn.traverseInOrder());
//# sourceMappingURL=DriverCode.js.map