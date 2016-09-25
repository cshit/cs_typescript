export default function bubbleSort(arr:number[])
{
	var swapped = true;
	while(swapped){
		var innerSwapped = false;
		for(var i=0; i <= arr.length -1; i++)
		{
			var init = arr[i];
			var next = arr[i+1];

			if(next < init)
			{
				arr[i + 1]  = init;
				arr[i]      = next;
				innerSwapped = true;
			}
		}
		if(!innerSwapped)
			swapped = false;
	}

	return arr
}