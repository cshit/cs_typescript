// Ex. 1
function foo (array: number[]): void {
	var sum: number = 0;
	var product: number = 1;

	// First N iteration
	for (let i: number = 0; i < array.length; i++){
		sum += array[i];
	}

	// Second N iteration
	for(let i :number = 0; i < array.length; i++){
		product *= array[i]
	}

	console.log(sum, ',', product)
}

// foo([1,2,3,4,5]);
// BigO: O(N) we iterate over the array 2 times but does not matter.

// ----------------------------------------------------------------------


// Ex. 2
function printPairs(array: number[]):void{
	for(let i:number = 0; i < array.length; i++){
		for(let j:number = 0; j < array.length; j++){
			console.log(array[i], ",", array[j])
		}
	}
}

// printPairs([1,2,3,4,5]);
// BigO: O(N^2). Since we are iterating over all for each element
// We are printing all pairs and there are N^2 paris. 1-2 != 2-1

// ----------------------------------------------------------------------



// Ex. 3
function printUnorderedPairs(array: number[]){
	for(let i: number = 0; i < array.length; i++){
		for(let j: number = i + 1; j < array.length; j++){
			console.log(array[i], ",", array[j]);
		}
	}
}

printUnorderedPairs([1,2,3,4,5]);
// BigO: O(N^2) The inner loop does half of the iterations in average so
// the the total work is N^2/2 BigO of N^2

// ----------------------------------------------------------------------