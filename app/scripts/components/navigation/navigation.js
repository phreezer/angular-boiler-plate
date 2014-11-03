/**
* Boilerplate
* (c) 2014 by Marcus Heath Showalter. All rights reserved.
*
* Author: Marcus Heath Showalter
* Web: heathshowalter.com
* Email: marcus.h.showalter@gmail.com
* Date: 2014-09-14 07:43 PM
*/

'use strict';
/*jshint indent:4 */

(function ( angular ) {

angular.module('lmApp')

	.directive('appNavigation', function () {
		return {
			restrict: 'C',
			templateUrl: 'views/components/navigation/navigation.html',
			controller: function() {
				
			}
		};
	});

})( window.angular );
