export default function quickSort(arr:number[], low, high){
	if(low > high)
	{
		console.log(arr);
		return arr;
	}
	
	var pivotIndex = partition(arr, low, high);
	quickSort(arr, low, pivotIndex-1);
	quickSort(arr, pivotIndex+1, high);
	
}

function partition(arr, low, high):number
{
	var pivotIndex = Math.floor((low+high)/2);
	
	var temp1 = arr[pivotIndex];
	arr[pivotIndex] = arr[high];
	arr[high] = temp1;

	var i:number = low;
	for(let j:number=low; j < high; j++)
	{
		if(arr[j] <= arr[high])
		{
			var temp2:number = arr[i];
			arr[i] = arr[j];
			arr[j] = temp2;
			i++
		}
	}

	var temp3   = arr[i];
	arr[i]      = arr[high];
	arr[high]   = temp3;

	return i
}