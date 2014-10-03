'use strict';

/**
 * @ngdoc function
 * @name magitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the magitApp
 */
angular.module('magitApp')
  .controller('MainCtrl', function ($scope) {
      
        var displayCharts = function displayCharts() {
            $scope.dataTree = 'coucou';
            console.log('hey');
        };
      

      displayCharts();
  });
