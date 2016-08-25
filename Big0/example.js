// Ex. 1
function foo(array) {
    var sum = 0;
    var product = 1;
    // First N iteration
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    // Second N iteration
    for (var i = 0; i < array.length; i++) {
        product *= array[i];
    }
    console.log(sum, ',', product);
}
// foo([1,2,3,4,5]);
// BigO: O(N) we iterate over the array 2 times but does not matter.
// ----------------------------------------------------------------------
// Ex. 2
function printPairs(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            console.log(array[i], ",", array[j]);
        }
    }
}
// printPairs([1,2,3,4,5]);
// BigO: O(N^2). Since we are iterating over all for each element
// We are printing all pairs and there are N^2 paris. 1-2 != 2-1
// ----------------------------------------------------------------------
// Ex. 3
function printUnorderedPairs(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            console.log(array[i], ",", array[j]);
        }
    }
}
printUnorderedPairs([1, 2, 3, 4, 5]);
// BigO: O(N^2) The inner loop does half of the iterations in average so
// the the total work is N^2/2 BigO of N^2
// ---------------------------------------------------------------------- 
//# sourceMappingURL=example.js.map