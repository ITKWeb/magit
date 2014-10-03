'use strict';

/**
 * @ngdoc function
 * @name magitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the magitApp
 */
angular.module('magitApp').factory('DataMockedSrv', function () {

  return {
    getSimpleDataMocked: function() {
      return {
        commit: {
          comment: 'Initial commit',
          hash: '10b07bf',
          user: 'Romain Maneschi',
          tags: [],
          branchs: ['HEAD', 'origin/master', 'origin/HEAD', 'master'],
          time: new Date(),
          children: [
            {
              comment: 'explain how to run project',
              hash: 'a7cf633',
              user: 'Romain Maneschi',
              tags: [],
              branchs: ['HEAD', 'origin/master', 'origin/HEAD', 'master'],
              time: new Date(),
              children: [
                {
                  comment: 'bootstrap project with yeoman :',
                  hash: '5922bab',
                  user: 'Romain Maneschi',
                  tags: [],
                  branchs: ['HEAD', 'origin/master', 'origin/HEAD', 'master'],
                  time: new Date(),
                  children: [
                    {
                      comment: 'clean generated files + put first DOM architecture of project',
                      hash: '46127ee',
                      user: 'Romain Maneschi',
                      tags: [],
                      branchs: ['HEAD', 'origin/master', 'origin/HEAD', 'master'],
                      time: new Date(),
                      children: []
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    }
  };
    
});
