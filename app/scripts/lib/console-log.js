/**
* Console Log
* (c) 2014 by Marcus Heath Showalter. All rights reserved.
* 
* Author: Marcus Heath Showalter
* Web: heathshowalter.com
* Email: marcus.h.showalter@gmail.com
* 
* Adds console.log functionality to browsers that don't support console
*/

'use strict';
/*jshint indent:4 */

window.log = function(){
	var log;
	log.history = log.history || [];
	log.history.push(arguments);
	if(this.console){
		console.log( Array.prototype.slice.call(arguments) );
	}
};
