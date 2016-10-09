export default function combine(target:number[]):number[]
{
	var combinations =[];
	for(let j=0; j <= target.length-1; j++)
	{
		for(let i = 0; i<=target.length -1; i++)
		{
			if(i!=j)
			{
				combinations.push([target[j], target[i]])
			}
		}
	}

	return combinations
}