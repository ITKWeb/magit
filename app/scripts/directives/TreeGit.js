angular.module('magitApp').directive('treeGit', [

    function () {

        'use strict';

        return {

            restrict: 'E',
            link: function (scope, element) {

                var margin =  20;
                var height =  900;
                var width = 800;

                var draw = function draw(dataTree) {
                 
                    console.log(dataTree);
                    var i = 0;
                    var tree = d3.layout.tree().size([height, width]);
                    
                    var diagonal = d3.svg.diagonal()
                        .projection(function(d) { return [d.x, d.y]; }); //invert x and y for horizontal
                     
                    var svg = d3.select(element[0])
                        .append('svg')
                        .attr('width', width)
                        .attr('height',  height)
                        .attr('viewBox', '0 0 ' + width + ' ' + height)
                        .append('g')
                    .attr('transform', 'translate(' + margin + ',' + margin + ')');
                    
                    var root = dataTree;
                    update(svg,root, tree,diagonal, i);
                     
                };

                
                var update = function update(svg,root,tree,diagonal,i) {

                    // Compute the new tree layout.
                    var nodes = tree.nodes(root).reverse(),
                    links = tree.links(nodes);

                    // Normalize for fixed-depth.
                    nodes.forEach(function(d) { d.y = d.depth * 180; });

                    // Declare the nodes…
                    var node = svg.selectAll('g.node')
                        .data(nodes, function(d) { return d.id || (d.id = ++i); });

                    // Enter the nodes.
                    var nodeEnter = node.enter().append('g')
                        .attr('class', 'node')
                        .attr('transform', function(d) {
                            return 'translate(' + d.x + ',' + d.y + ')'; }); //invert x and y for horizontal

                    nodeEnter.append('circle')
                        .attr('r', 10)
                        .style('fill', '#fff');

                    nodeEnter.append('text')
                        .attr('x', function(d) {
                            return d.children || d._children ? -13 : 13; })
                        .attr('dy', '.35em')
                        .attr('text-anchor', function(d) {
                            return d.children || d._children ? 'end' : 'start'; })
                        .text(function(d) { return d.comment; })
                        .style('fill-opacity', 1);

                    // Declare the links…
                    var link = svg.selectAll('path.link')
                        .data(links, function(d) { return d.target.id; });

                    // Enter the links.
                    link.enter().insert('path', 'g')
                        .attr('class', 'link')
                        .attr('d', diagonal);

                };
                
                scope.$watch('dataTree', function(newValue) {
                    if(newValue !== undefined) {
                        draw(scope.dataTree);
                    }
                });
                
            }
        };
    }
]);
