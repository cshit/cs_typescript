function permuteLowtoHigh(target:number[]):number[]
{
	var permutations = [];
	for(let i=0; i <= target.length-1; i++)
	{
		for(let j=i; j<= target.length-1; j++)
		{
			if(i!=j)
			{
				permutations.push([target[i], target[j]])
			}
		}
	}

	return permutations
}

function permuteHighttoLow(target:number[]):number[]
{
	var permutations =[];
	for(let j=target.length-1; j >= 0; j--)
	{
		for(let i=j; i>=0; i--)
		{
			if(i!=j)
			{
			combinations.push([target[j], target[i]])
			}
		}
	}

	return permutations
}

export default {permuteLowtoHigh: permuteLowtoHigh, permuteHighttoLow: permuteHighttoLow}