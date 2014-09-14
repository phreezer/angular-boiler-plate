'use strict';

/**
 * @ngdoc overview
 * @name openApp
 * @description
 * # openApp
 *
 * Main module of the application.
 */
angular
  .module('openApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/pages/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
