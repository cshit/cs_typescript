// export default function selectionSort(arr:number[]):number[]
// {
// 	var index:number    = 0;
// 	var high:number     = arr.length-1;
//
// 	while(index <= high)
// 	{
// 		var initial:number = 0;
//
// 		for(let i=initial; i<=high; i++)
// 		{
// 			var base:number = arr[initial];
// 			var current:number = arr[i+1];
//
// 			if( base > current)
// 			{
// 				arr[initial]    = current;
// 				arr[i+1]        = base;
// 			}
// 			initial++;
// 		}
// 		index++;
// 	}
//
// 	return arr
// }

/**
 * Selection Sort O(n^2)
 * @param arr
 * @returns {number[]}
 */
export default function selectionSort(arr:number[]):number[]
{
	for(let j=0; j<=arr.length-1; j++)
	{
		for(let i=j+1; i<=arr.length-1; i++)
		{
			if( arr[j] > arr[i])
			{
				var temp = arr[j];
				arr[j] = arr[j];
				arr[i] = temp;
			}
		}
	}

	return arr
}