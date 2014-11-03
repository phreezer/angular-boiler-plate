/**
* Boilerplate
*
* Author: Marcus Heath Showalter
* Web: heathshowalter.com
* Email: marcus.h.showalter@gmail.com
*/

'use strict';
/*jshint indent:4 */

(function ( angular ) {

	angular.module('lmApp')

	.provider('responsiveProvider', ['$windowProvider', function($windowProvider) {

		// Gather winWidth and smartDevice information only 1x at app startup...
		var $window = $windowProvider.$get();

		var helper = {
			isExtraSmall: function() {
				return (getSmallestScreenSize($window) < 768);
			},
			isSmall: function() {
				return (getSmallestScreenSize($window) >= 768 && getSmallestScreenSize($window) < 992);
			},
			isMedium: function() {
				return (getSmallestScreenSize($window) >= 992 && getSmallestScreenSize($window) < 1200);
			},
			isLarge: function() {
				return (getSmallestScreenSize($window) >= 1200);
			},
			isXLarge: function() {
				return (getSmallestScreenSize($window) >= 1920);
			},
			getScreenClass: function() {
				var screenClass = 'lg';

				if ( this.isExtraSmall() ) {
					screenClass = 'xs';
				} else if ( this.isSmall() ) {
					screenClass = 'sm';
				} else if ( this.isMedium() ) {
					screenClass = 'md';
				} else if ( this.isXLarge() ) {
					screenClass = 'xlg';
				}
				return screenClass;
			},
			getDeviceType: function() {
				var deviceType = 'Desktop';			// Default Settings

				if(this.isSmartDevice){				// Determine device type [Desktop, Mobile]
					deviceType = 'Mobile';
				}
				return deviceType;
			},
			winWidth: getSmallestScreenSize($window),
			isSmartDevice: isSmartDevice($window)
		};

		this.$get = function() {
			return helper;
		};
	}])


	.directive('responsiveListener', function() {
		return {
			restrict: 'A',
			controller: function($rootScope, $window, responsiveProvider){

				var currentScreenClass = responsiveProvider.getScreenClass();

				function onResizeFunction() {
					if(currentScreenClass !== responsiveProvider.getScreenClass()){
						currentScreenClass = responsiveProvider.getScreenClass();
						
						$rootScope.$broadcast('screenSizeUpdated', currentScreenClass);
					}
				}

				angular.element($window).bind('resize', onResizeFunction );

			}
		};
	});


	function isSmartDevice( $window ) {
		var ua = $window.navigator.userAgent || $window.navigator.vendor || $window.opera;
		return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);						// Check for mobile devices
	}


	function getSmallestScreenSize($window) {																	// Emulators and some devices may lie about the window size but not the screen size so use the smallest value possible
		var arr = [$window.outerWidth, $window.screen.availWidth, $window.screen.width];
		arr.sort(function(a, b){ return a-b; });    																// sort by lowest screen size first
		return arr[0];    																						// return lowest screensize
	}

})( window.angular );
