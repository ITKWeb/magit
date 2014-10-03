angular.module('magitApp').directive('treeGit', [

    function () {

        'use strict';

        return {

            restrict: 'E',
            link: function (scope, element) {

                var margin =  20;
                var height =  900;
                var width = 800;
                var svg, dragLine, root, isDragging, fromNode, toNode, source, target;

                var draw = function draw(dataTree) {
                    element[0].innerHTML = '';

                    var i = 0;
                    isDragging = false;
                    fromNode=null;
                    toNode=null;
                    var tree = d3.layout.tree().size([height, width]);
                    
                    var diagonal = d3.svg.diagonal()
                        .projection(function(d) { return [d.x, d.y]; }); //invert x and y for horizontal

                    
                    
                    svg = d3.select(element[0])
                        .append('svg')
                        .attr('width', width)
                        .attr('height',  height)
                        .attr('viewBox', '0 0 ' + width + ' ' + height)
                        .append('g')
                    .attr('transform', 'translate(0 ,' + margin + ')');
                    
                    root = dataTree;
                    update(svg,tree,diagonal, i);
                    
                    
                    var lineLayer = svg.append('g');
                     
                    dragLine = lineLayer.append('line')
                      .attr('class', 'dragLine');
                    
                    
                    svg.selectAll('.node')
                        .on('mousedown', function (d) {
                            if(fromNode === null){
                                fromNode = d;
                                dragLine
                                    .style('class', 'dragLine')
                                    .attr({
                                        x1: d.x,
                                        y1: d.y,
                                        x2: d.x,
                                        y2: d.y
                                    });
                                toNode=null;
                                isDragging = true;
                            }else {
                            
                                //NO click to self
                                if(fromNode !== d){
                                    toNode = d;
                                    dragLine
                                        .style('class', 'dragLine')
                                        .attr({
                                            x1: fromNode.x,
                                            y1: fromNode.y,
                                            x2: d.x,
                                            y2: d.y
                                        });
                                    isDragging=false;
                                }
                            }                    
                        })
                        .on('mouseup', function () {
                           if(fromNode !== null && toNode !== null && !isDragging){
                               source = fromNode;
                               target = toNode;
                               fromNode=null;
                               toNode=null;
                               console.log('Je vais de là:', source, ' à de là: ', target);
                               
                               isDragging=false;
                           }
                        })
                        .on('mouseover', function () {
                           d3.select(this).attr('z-index', 10)
                            .attr('class', 'hoverNode');
                        })
                        .on('mouseout', function () {
                           d3.select(this).attr('z-index', 1)
                            .attr('class', 'node');
                        });                  
       
                    svg.on('mousemove', function () {
                        if(fromNode !== null)
                        {
                            var m = d3.mouse(this);
                            dragLine.attr({
                                            x1: fromNode.x,
                                            y1: fromNode.y,
                                            x2: m[0]-1,
                                            y2: m[1]-2
                                        });                     
                        }

                    });
                     
                };

 
                //Draw all the tree
                 var update = function update(svg,tree,diagonal,i) {

                    // Compute the new tree layout.
                    var nodes = tree.nodes(root).reverse(),
                    links = tree.links(nodes);

                    // Normalize for fixed-depth.
                    nodes.forEach(function(d) { d.y = d.depth * 30; });

                    // Declare the nodes…
                    var node = svg.selectAll('g.node')
                        .data(nodes, function(d) { return d.id || (d.id = ++i); });

                    // Enter the nodes.
                    var nodeEnter = node.enter().append('g')
                        .attr('class', 'node')
                       /* .call(dragListener)*/
                        .attr('transform', function(d) {
                            return 'translate(' + d.x + ',' + d.y + ')'; }); //invert x and y for horizontal

                    nodeEnter.append('circle')
                        .attr('r', 5)
                        .style('fill', '#fff');

                    nodeEnter.append('text')
                        .attr('x', function(d) {
                            return d.children || d._children ? -13 : 13; })
                        .attr('dy', '.35em')
                        .attr('text-anchor', function(d) {
                            return d.children || d._children ? 'end' : 'start'; })
                        .text(function(d) { return d.comment.length > 30 ? d.comment.substr(0, 30)+'...' : d.comment; })
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
