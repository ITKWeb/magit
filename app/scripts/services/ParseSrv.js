'use strict';

/**
 * @ngdoc function
 * @name magitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the magitApp
 */
angular.module('magitApp').factory('ParseSrv', function () {

  var regexpLine = /^([^#]+)#([^#]+)?#([^\|]+)\|([^\|]+)?\|([^\|]*)\|(.+)$/;

  var buildCommit = function buildCommit(hash, comment, time, user, optParents, optBranchs, optTags, optChildren) {
    var parents = optParents || [];
    var banchs = optBranchs || [];
    var tags = optTags || [];
    var children = optChildren || [];
    return {
      hash: hash,
      comment: comment,
      time: time,
      user: user,
      parents: parents,
      tags: tags,
      branchs: banchs,
      children: children
    };
  };

  var parseLine = function parseLine(line) {
    var res = line.match(regexpLine);
    if(res !== null) {
      var hash = res[1];
      var parentHashs = res[2] !== undefined ? res[2].split(' ') : [];
      var time = res[3];
      var branchs = res[4] !== undefined ? res[4].replace(/(\s|\(|\))/g, '').split(',') : [];
      var user = res[5];
      var comment = res[6];
      return buildCommit(hash, comment, time, user, parentHashs, branchs);
    }
  };

  var reorganizeCommit = function reorganizeCommit(commits, commitsByHash) {
    var firstNode = commits[0];
    for(var i=0, len=commits.length; i<len; i++) {
      var commitCurrent = commits[i];
      var parentsCommits = commitCurrent.parents;
      for(var j=0, lenJ = parentsCommits.length; j<lenJ; j++) {
        var parentCommit = commitsByHash[parentsCommits[j]];
        if(parentCommit !== undefined) {
          parentCommit.children.push(commitCurrent);
        } else {//user hasn't give all the tree
          firstNode = commitCurrent;
        }
      }
    }
    return firstNode;
  };

  return {
    parse: function(gitLgResText) {
      var lines = gitLgResText.split('\n');
      var commits = [];
      var commitsByHash = {/*hash: Commit*/};
      for(var i=0, len=lines.length; i<len; i++) {
        var commit = parseLine(lines[i]);
        if(commit !== undefined) {
          commitsByHash[commit.hash] = commit;
          commits.push(commit);
        } else {
          console.error('not parsed', lines[i]);
        }
      }
      return reorganizeCommit(commits.reverse(), commitsByHash);
    }
  };
    
});
