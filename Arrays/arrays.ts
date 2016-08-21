/*
Is Unique:
Implement an algorithm to determine if a string has 
all unique characters. What if you can not use additional
data structures?
Assuming 128 character ASCII alphabet
*/


function checkUniqueness(str:string):boolean {
	if (str.length >= 128)
		return false;
	
	var char_set: boolean[] = Array(128).fill(false);

	for(var i: number =0; i < str.length; i++ ){

		var val: number = str.charCodeAt(i);
		
		if(char_set[val]){
			console.log('Duplicated char:', str.charAt(i));
			return false
		}
		
		char_set[val] = true;
	}


	return true;
}

console.log(checkUniqueness("SEBA"));


