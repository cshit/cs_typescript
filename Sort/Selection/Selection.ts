export default function selectionSort(arr:number[])
{
	var index = 0;
	var high = arr.length -1;

	while(index <= high)
	{
		var initial = 0;

		for(let i=initial; i<=high; i++)
		{
			var base = arr[initial];
			var current = arr[i+1];

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