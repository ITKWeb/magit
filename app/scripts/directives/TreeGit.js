angular.module('magitApp').directive('treeGit', [

    function () {

        'use strict';

        return {

            restrict: 'E',
            link: function (scope, element) {

  
                var height =  900;
                var width = 800;

                var draw = function draw(dataTree) {
                 
                    console.log(element[0],'draw',dataTree); 
                    var svg = d3.select(element[0])
                        .append('svg')
                        .attr('width', width)
                        .attr('height',  height)
                        .attr('viewBox', '0 0 ' + width + ' ' + height);
                    
                    svg.append('rect')
                    .attr('width', width + 'px')
                    .attr('height', height + 'px')
                    .attr('fill', 'rgba(200, 255, 111, 0.52)');
                     
                };

               
                draw(scope.dataTree);
                 console.log('hey2');
                
            }
        };
    }
]);
