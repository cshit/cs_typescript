export default function selectionSort(arr:number[]):number[]
{
	var index:number    = 0;
	var high:number     = arr.length-1;

	while(index <= high)
	{
		var initial:number = 0;

		for(let i=initial; i<=high; i++)
		{
			var base:number = arr[initial];
			var current:number = arr[i+1];

			if( base > current)
			{
				arr[initial]    = current;
				arr[i+1]        = base;
			}
			initial++;
		}
		index++;
	}

	return arr
}