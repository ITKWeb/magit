'use strict';

/**
 * @ngdoc overview
 * @name magitApp
 * @description
 * # magitApp
 *
 * Main module of the application.
 */
angular
  .module('magitApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
