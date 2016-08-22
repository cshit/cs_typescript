/*
* Check Permutation
*
* Given two strings, write a method to decide if one is a permutation of the other.
*
* */


// Sol 1. Sort and compare

function sortString(str: string): string {
	return str.split('').sort().join('');
}

function permutation(s: string, t:string): boolean{
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


String.prototype.toCharArray = function(){
	return this.split('').map(function(letter: string){return letter.charCodeAt()});
};


function permutation2 (s: string, t: string): boolean{
	// Return in case of an stupid case
	if(s.length != t.length)
		return false;

	// Get the array of 128 zeros
	var letters = Array(128).fill(0);

	// Lets count the letters
	// Split s
	var sArray: number[] = s.toCharArray();

	// Iterate over new array and count in array
	for(let letterCode in sArray){
		letters[sArray[letterCode]]++;
	}
	
	// Look for negatives counts when substracting
	for (let i: number = 0; i <= t.length; i++){
		let c: number = t.charCodeAt(i);
		letters[c]--;
		if(letters[c] < 0){
			return false
		}
	}
	
	
	return true
}

// Big0: O(N)


console.log(permutation2('mellon', 'llemon'));