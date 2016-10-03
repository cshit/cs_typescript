/** 
 * Merge Sort O(n log(n)) ; Recursive; not memory efficient; Stable
 * @param arr
 * @param low
 * @param high
 * @returns {number[]}
 */

export default function mergeSort(arr:number[], low:number, high:number):number[]
{
	if(low > high)
	{
		var middle = Math.floor((low+high)/2);

		mergeSort(arr, low, middle);
		mergeSort(arr, middle+1, high);
		merge(arr, low, middle, high);
	}

	return arr
}

function merge(arr:number[], low:number, middle:number, high:number):void
{
	// Step 1: Copy the original arr
	var tempArr = [];

	for(let z=0; z<=arr.length-1; z++)
	{
		tempArr[z] = arr[z]
	}

	// Step 2: Create variables to traverse
	var i = low;
	var j = middle+1;
	var k = low;

	// Step 3: Merge: Move from the TEMP to arr integers in order
	while(i<=middle && j<=high)
	{
		if(tempArr[i]<=tempArr[j])
		{
			arr[k] = tempArr[i];
			i++;
		}
		else
		{
			arr[k] = tempArr[j];
			j++;
		}
		k++;
	}

	// Step4: Finalize merging in case right side of the array is bigger.
	while(i<=middle)
	{
		arr[k] = tempArr[i];
		k++;
		i++;
	}
}