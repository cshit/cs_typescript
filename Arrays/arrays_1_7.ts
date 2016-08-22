/*
* Rotate Matrix
* Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
* write a method to rotate the image 90 degrees. Can you do this in place?
*/


var matrix =
[
['00','01','02','03'], //col to row and then
['10','11','12','13'],
['20','21','22','23'],
['30','31','32','33'],
];

console.log('INIT MATRIX--------');
console.log(matrix);
console.log('');
console.log('-------------------');


// Swap index by index
function rotate(matrix: string[][], n:number): void{

	for(var layer = 0; layer < n / 2; layer++){
		var first: number = layer;
		var last: number = n - 1 - layer;

		for(var i = first; i < last; i++){
			var offset: number = i - layer;

			console.log("");
			console.log("i =", i,"---------------");
			console.log("");
			console.log('layer:', layer);
			console.log('first:', first);
			console.log('last:', last);
			console.log('offset:', offset);
			console.log('last-offset:', last-offset);
			console.log("");
			console.log('top:', first, i);
			console.log('right:', i, last);
			console.log('bottom', last, last-offset);
			console.log('left:', last-offset, first);


			// save top
			var top: string = matrix[first][i];

			// left -> top
			matrix[first][i] = matrix[last-offset][first];

			// bottom -> left
			matrix[last-offset][first] = matrix[last][last-offset];

			// right -> bottom
			matrix[last][last - offset] = matrix[i][last];

			// top -> right
			matrix[i][last] = top;

			console.log("");
			console.log(matrix);
		}
	}

}

rotate(matrix, 4);

console.log('');
console.log('FINAL MATRIX-------');
console.log(matrix);
console.log('');
console.log('-------------------');