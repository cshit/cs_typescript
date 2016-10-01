// export default function bubbleSort(arr:number[])
// {
// 	var swapped = true;
// 	while(swapped){
// 		var innerSwapped = false;
// 		for(var i=0; i <= arr.length -1; i++)
// 		{
// 			var init = arr[i];
// 			var next = arr[i+1];
//
// 			if(next < init)
// 			{
// 				arr[i + 1]  = init;
// 				arr[i]      = next;
// 				innerSwapped = true;
// 			}
// 		}
// 		if(!innerSwapped)
// 			swapped = false;
// 	}
//
// 	return arr
// }

/**
 * Bubble Sort O(n^2)
 * @param arr
 * @returns {number[]}
 */
export default function bubbleSort(arr:number[]):number[]
{
	for(let j=0; j<=arr.length-1;j++)
	{
		for(var i=0; i <= arr.length -1; i++)
		{
			var init = arr[i];
			var next = arr[i+1];

			if(next < init)
			{
				arr[i+1] = init;
				arr[i]   = next;
			}
		}
	}

	return arr
}