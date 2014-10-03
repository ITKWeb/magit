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
        comment: 'Initial commit',
        hash: '10b07bf',
        user: 'Romain Maneschi',
        tags: [],
        branchs: ['HEAD', 'origin/master', 'origin/HEAD', 'master'],
        time: 'il y a 2 heures',
        children: [
          {
            comment: 'explain how to run project',
            hash: 'a7cf633',
            user: 'Romain Maneschi',
            tags: [],
            branchs: ['HEAD', 'origin/master', 'origin/HEAD', 'master'],
            time: 'il y a 37 minutes',
            children: [
              {
                comment: 'bootstrap project with yeoman :',
                hash: '5922bab',
                user: 'Romain Maneschi',
                tags: [],
                branchs: ['HEAD', 'origin/master', 'origin/HEAD', 'master'],
                time: 'il y a 37 minutes',
                children: [
                  {
                    comment: 'clean generated files + put first DOM architecture of project',
                    hash: '46127ee',
                    user: 'Romain Maneschi',
                    tags: [],
                    branchs: ['HEAD', 'origin/master', 'origin/HEAD', 'master'],
                    time: 'il y a 23 minutes',
                    children: []
                  }
                ]
              },
             {
                comment: 'IM THE NEW BRANCH LOLZ',
                hash: '5922bac',
                user: 'Rine',
                tags: [],
                branchs: ['HEAD', 'origin/master', 'origin/HEAD', 'master'],
                time: 'il y a 4 minutes',
                children: [
                  {
                    comment: 'jaipadideededommentaire',
                    hash: '46127ef',
                    user: 'Rine',
                    tags: [],
                    branchs: ['HEAD', 'origin/master', 'origin/HEAD', 'master'],
                    time: 'il y a 2 minutes',
                    children: []
                  },
                  {
                    comment: 'nope',
                    hash: '46127ed',
                    user: 'Rine',
                    tags: [],
                    branchs: ['HEAD', 'origin/master', 'origin/HEAD', 'master'],
                    time: 'il y a 2 minutes',
                    children: []
                  }
                ]
              }                
           ]
          }
        ]
      };
    }
  };
    
});
