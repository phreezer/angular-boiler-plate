/**
* Boilerplate
* (c) 2014 by Marcus Heath Showalter. All rights reserved.
*
* Author: Marcus Heath Showalter
* Web: heathshowalter.com
* Email: marcus.h.showalter@gmail.com
* Date: 2014-09-14 07:39 PM
*/

'use strict';
/*jshint indent:4 */

(function ( angular ) {

angular.module('openApp')

	.directive('appFooter', function () {
		return {
			controller: function($scope) {

			},
			templateUrl: 'views/components/footer/footer.html',
			restrict: 'C'
		};
	});

})( window.angular );