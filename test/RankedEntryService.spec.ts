///<reference path='../typings/index'/>

import RankedEntryService from "../RankedList/RankedEntryService";
var assert = require('assert');

describe('Ranked Entry Service', ()=>{
	it('should throw', function(){
		assert.throws(()=>{
			var rs = new RankedEntryService();
			this.attr = 'attr'
			rs.compare(null, null);
		})
	})
});