export default function countIslands(target:string[][]):number
{
	var count = 0;
	var map = {};

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

	function checkForX(x:number, y:number, start?:boolean):boolean
	{
		if(x>=0 && y>=0 && y<target.length && x<target[y].length)
		{
			const key       = `${x},${y}`;
			const value     = map[key];

			if(!value)
			{
				map[key] = true;

				if(target[y][x] == 'X')
				{

					checkForX(x+1, y);
					if(!start)
					{
						checkForX(x, y-1);
						checkForX(x-1, y);
					}

					checkForX(x, y+1);

					return true;
				}

			}

		}
		return false;
	}
	
	return count
}