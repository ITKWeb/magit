'use strict';

/**
 * @ngdoc function
 * @name magitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the magitApp
 */
angular.module('magitApp')
  .controller('MainCtrl', [ '$scope', 'DataMockedSrv',
    function ($scope, dataMockedSrv) {
      
        var displayCharts = function displayCharts() {
            $scope.dataTree = dataMockedSrv.getSimpleDataMocked();
                            
/*                [
                  {
                    'name': 'Top Level',
                    'parent': 'null',
                    'children': [
                      {
                        'name': 'Level 2: A',
                        'parent': 'Top Level',
                        'children': [
                          {
                            'name': 'Son of A',
                            'parent': 'Level 2: A'
                          },
                          {
                            'name': 'Daughter of A',
                            'parent': 'Level 2: A'
                          }
                        ]
                      },
                      {
                        'name': 'Level 2: B',
                        'parent': 'Top Level'
                      }
                    ]
                  }
                ];*/
        };
      

      displayCharts();
  }]);
