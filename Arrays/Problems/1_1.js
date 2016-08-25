/*
Is Unique:
Implement an algorithm to determine if a string has
all unique characters. What if you can not use additional
data structures?
Assuming 128 character ASCII alphabet
*/
var a = 'Avocado'.charAt(0);
var b = "Avocado".charCodeAt(0);
var c = 'Avocado'.length;
console.log(a, b, c);
// Return false if string length is >= to 128
// Since we can know the ASCII code value of any character we can use it as an index of an array
// We can have an array of 128 elements as false ~ ASCII flags
// We iterate from 0 to the string length - 1
// for each character we ask if its position in the ASCII flags is true if it is we return false
// other wise we flag its position on the array as true. (This way will catch it next time)
// if we never return false then return true
// Map presence of character in the array to ASCII Code ~ ASCII flags
// [..., false, false, false, false, false, false, false, false,  ...] 
//        64      65     66
//        A       B      C
function uniqueChars(str) {
    // Return false if string longer than 128
    if (str.length >= 128)
        return false;
    // Array of 128 false elements
    var char_set = Array(128).fill(false);
    // Iterate over the string flagging or returning false
    for (var i = 0; i <= str.length; i++) {
        // ASCII code for the corresponding character
        var val = str.charCodeAt(i);
        // Return false if repeated character shows up again
        if (char_set[val]) {
            return false;
        }
        // Flag the character possition in the ASCII flags array
        char_set[val] = true;
    }
    return true;
}
// Big0: O(N)
console.log(uniqueChars("SEBA"));
//# sourceMappingURL=1_1.js.map