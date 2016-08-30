import {IRankedEntry} from "./IRankedEntry";

export default class RankedEntry implements IRankedEntry
{
	guid:string;
	label:string;
	imageUrl:string;
	thumbUrl:string;
	
	compare(other: IRankedEntry): number
	{
		
	}
	
}