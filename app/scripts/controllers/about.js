'use strict';

/**
 * @ngdoc function
 * @name magitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the magitApp
 */
angular.module('magitApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
