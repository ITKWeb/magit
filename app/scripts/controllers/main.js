'use strict';

/**
 * @ngdoc function
 * @name magitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the magitApp
 */
angular.module('magitApp')
  .controller('MainCtrl', [ '$scope', 'DataMockedSrv', 'ParseSrv',
    function ($scope, dataMockedSrv, parseSrv) {
      
      $scope.dataTree = dataMockedSrv.getSimpleDataMocked();

      $scope.parse = function() {
        $scope.dataTree = parseSrv.parse($scope.gitLgResText);
      };


  }]);
