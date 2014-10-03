'use strict';

/**
 * @ngdoc function
 * @name magitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the magitApp
 */
angular.module('magitApp').factory('ParseSrv', function () {

  var regexpLine = /^.\s([^\s]+)\s-\s(\(([^\)]+)\))?([^\<]+)\s\(([^\)]+)\)<([^>]+)>$/;

  var buildCommit = function buildCommit(hash, comment, time, user, optBranchs, optTags, optChildren) {
    var banchs = optBranchs || [];
    var tags = optTags || [];
    var children = optChildren || [];
    return {
      hash: hash,
      comment: comment,
      time: time,
      user: user,
      tags: tags,
      branchs: banchs,
      children: children
    };
  };

  var parseLine = function parseLine(line) {
    var res = line.match(regexpLine);
    if(res !== null) {
      if(res[2] === undefined) {//no branch
        return buildCommit(res[1], res[4], res[5], res[6]);
      } else {
        var branchs = res[3].split(',');
        return buildCommit(res[1], res[4], res[5], res[6], branchs);
      }
    }
  };

  var reorganizeCommit = function reorganizeCommit(commits) {
    var commitInit = commits[0];
    for(var i=1, len=commits.length; i<len; i++) {
      commitInit.children.push(commits[i]);
      commitInit = commits[i];
    }
    return commits[0];
  };

  return {
    parse: function(gitLgResText) {
      var lines = gitLgResText.split('\n');
      var commits = [];
      for(var i=0, len=lines.length; i<len; i++) {
        var commit = parseLine(lines[i]);
        if(commit !== undefined) {
          commits.push(commit);
        } else {
          console.error('not parsed', lines[i]);
        }
      }
      return reorganizeCommit(commits.reverse());
    }
  };
    
});
