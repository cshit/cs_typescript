export default function insertionSort(arr:number[]){
	for(let i=1; i<=arr.length-1; i++ )
	{
		var j = i;
		while(arr[j-1] > arr[j])
		{
			var temp    = arr[j];
			arr[j]      = arr[j-1];
			arr[j-1]    = temp;
			j--;
		}
	}
	
	return arr
}