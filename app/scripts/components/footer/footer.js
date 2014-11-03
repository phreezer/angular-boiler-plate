/**
* Boilerplate
* (c) 2014 by Marcus Heath Showalter. All rights reserved.
*
* Author: Marcus Heath Showalter
* Web: heathshowalter.com
* Email: marcus.h.showalter@gmail.com
*/

'use strict';
/*jshint indent:4 */

(function ( angular ) {

angular.module('lmApp')

	.directive('appFooter', function () {
		return {
			restrict: 'C',
			templateUrl: 'views/components/footer/footer.html',
			controller: function() {
				
			}
		};
	});

})( window.angular );
