export default function countIslands(target:string[][]):number
{
	var count = 0;
	var map = {};
	
	for(let y=0; y<target.length; y++)
	{
		const row = target[y];
		
		for(let x=0; x<row.length; x++)
		{
			map[`${x},${y}`] = row[x];
		}
	}

	function checkForX(x:number, y:number, start?:boolean):boolean
	{
		const key       = `${x},${y}`;
		const value     = map[key];

		if(value)
		{
			delete map[key];

			if(value == 'X')
			{

				if(!start)
				{
					checkForX(x, y-1);
					checkForX(x-1, y);
				}

				checkForX(x+1, y);
				checkForX(x, y+1);

				return true;
			}

		}

		return false;
	}

	for(let y=0; y<target.length; y++)
	{
		const row = target[y];

		for(let x=0; x<row.length; x++)
		{
			if(checkForX(x, y, true))
			{
				count++;
			}
		}
	}
	
	return count
}