'use strict';

/**
 * @ngdoc function
 * @name magitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the magitApp
 */
angular.module('magitApp')
  .controller('MainCtrl', [ '$scope', 
    function ($scope) {
      
        var displayCharts = function displayCharts() {
            $scope.dataTree = 'coucou'; //service.mesdata 
            console.log('hey');
        };
      

      displayCharts();
  }]);
