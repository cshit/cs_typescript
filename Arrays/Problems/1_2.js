/*
* Check Permutation
*
* Given two strings, write a method to decide if one is a permutation of the other.
*
* */
// Sol 1. Sort and compare
function sortString(str) {
    return str.split('').sort().join('');
}
function permutation(s, t) {
    return sortString(s) === sortString(t);
}
console.log(permutation("melon", "lemon"));
// Sol 2. Check if both strings have the same character count
// Return false if string's length id different
// Get an array with 128 elements of 0 ~ [0,0,0,0,0...]
// Split the first array and increment the count of the position of the character in the array
// using its ASCII code
// Iterate over the other string subtracting 1 to the character corresponding position
// Return if any value of the array turns into a negative number
String.prototype.toCharArray = function () {
    return this.split('').map(function (letter) { return letter.charCodeAt(); });
};
function permutation2(s, t) {
    // Return in case of an stupid case
    if (s.length != t.length)
        return false;
    // Get the array of 128 zeros
    var letters = Array(128).fill(0);
    // Lets count the letters
    // Split s
    var sArray = s.toCharArray();
    // Iterate over new array and count in array
    for (var letterCode in sArray) {
        letters[sArray[letterCode]]++;
    }
    // Look for negatives counts when substracting
    for (var i = 0; i <= t.length; i++) {
        var c_1 = t.charCodeAt(i);
        letters[c_1]--;
        if (letters[c_1] < 0) {
            return false;
        }
    }
    return true;
}
// Big0: O(N)
console.log(permutation2('mellon', 'llemon'));
//# sourceMappingURL=1_2.js.map