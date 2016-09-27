export function binarySearch(arr:number[], num:number):any{
	var low:number = 0;
	var high:number = arr.length-1;
	var mid:number;

	// if the number does not exist low is gonna become higher than high
	while(low <= high )
	{
		mid = Math.floor((low+high)/2);

		if(arr[mid] < num)
		{
			low = mid+1;
		}
		else if(arr[mid] > num)
		{
			high = mid-1;
		}
		else
		{
			return mid
		}
	}

	throw "Couldn't find element"
}

var z:number[] = [2, 3, 4, 5, 6, 7, 11, 16, 19, 20];

export function binarySearchRecursive(arr:number[], num:number, low:number, high:number)
{
	// console.log("hey");
	// throws if the number is not present
	if(low > high)
	{
		throw "Couldn't find element"
	}

	var mid = Math.floor((low+high)/2);
	// console.log(mid);
	
	if(arr[mid] < num)
	{
		binarySearchRecursive(arr, num, mid+1, high);
	}
	else if(arr[mid] > num )
	{
		binarySearchRecursive(arr, num, low, mid-1)
	}
	else
	{
		// console.log(mid);
		return mid
	}
}


