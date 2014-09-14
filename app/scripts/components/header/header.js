/**
* Boilerplate
* (c) 2014 by Marcus Heath Showalter. All rights reserved.
*
* Author: Marcus Heath Showalter
* Web: heathshowalter.com
* Email: marcus.h.showalter@gmail.com
* Date: 2014-09-13 08:45 PM
*/

'use strict';
/*jshint indent:4 */

(function ( angular ) {

angular.module('openApp')

	.directive('appHeader', function () {
		return {
			controller: function($scope) {
         		
			},
			templateUrl: 'views/components/header/header.html',
			restrict: 'C'
		};
	});

})( window.angular );