/**
* Boilerplate
* (c) 2014 by Marcus Heath Showalter. All rights reserved.
*
* Author: Marcus Heath Showalter
* Web: heathshowalter.com
* Email: marcus.h.showalter@gmail.com
* Date: 2014-09-15 11:36 PM
*/

'use strict';
/*jshint indent:4 */

(function ( angular ) {

	angular.module('openApp')

	.factory('menu', function ($http, APP_CONFIG) {
		var promise;
		var categoryList = [];
		var ajaxResponse = {};

		var sortData = function(data){
			angular.forEach(data, function(value, index){
				if(index === 'subcategories'){
					traverse(categoryList, value);
				}
			});
			return categoryList;
		};

		function traverse(categoryList,category) {
			for (var i in category) {
				console.log('Traverse',category[i]);
			}
		}

		function processCategories(arr) {
			var categories = [];
			if(arr.subcategories){
				for (var i in arr.subcategories) {
					categories.push(arr.subcategories[i]);
				}
			}
			console.log('Traversed top level',categories);
			return categories;
		}


		return {
			get: function () {
				console.log('get categories factory');
				var url = APP_CONFIG.CIP_BASE_URL + 'categories.json';

				promise = $http.get(url).then(function (response) {
					var data = sortData(response.data);
					console.log(data,response);
					ajaxResponse = response.data;
					return data;
				});
				return promise;
			},
			getCategories: function(){
				var categories = processCategories(ajaxResponse);
				categories.unshift({ id: '', 'Category Name': 'All', cssClass: 'toggleAll' });
				return  categories;
			}
		};
	});

})( window.angular );