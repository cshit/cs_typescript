/**
 * Counting Sort O(n), this is not a comparison algorithm. Good for integers in a small range. 
 * @param arr
 * @param min
 * @param max
 * @returns {number[]}
 */

export default function countingSort(arr:number[], min:number, max:number):number[]
{
	var counterArr = [];
	
	for(let i=0; i<=max; i++)
	{
		counterArr.push(0);
	}

	for(let j=0; j<=arr.length-1; j++)
	{
		counterArr[arr[j]]++;
	}
	
	var inx = 0;
	
	for(let k=0; k <= counterArr.length-1; k++)
	{
		if(counterArr[k] > 0)
		{
			var repeats = counterArr[k];
			while(repeats > 0)
			{
				arr[inx] = k;
				repeats--;
				inx++;
			}
		}
	}

	
	return arr
}
