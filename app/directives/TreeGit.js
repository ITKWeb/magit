angular.module('magitApp').directive('TreeGit', [

    function () {

        'use strict';

        return {

            restrict: 'E',
            link: function (scope, element, attrs) {

                var margin = 20;
                var height =  900;
                var width = 800;

                var draw = function draw(dataTree) {
                 
                d3.select(rootElement)
                    .append('svg')
                    .attr('width', width)
                    .attr('height',  height)
                    .attr('viewBox', '0 0 ' + width + ' ' + height)
                    .attr('perserveAspectRatio', 'xMinYMid')
                    .append('g')
                    .attr('transform', 'translate(' + margin + ', ' + margin+ ')');
                    
                    
                    
                    
                    
                    
                    
                    
            /*        
                    
                    
                    
                    
                    var data = dataAndName.data;
                    var sensorName = dataAndName.name;
                    
                    //Supprime les aciens elements lorsqu'on rafraichit
                    chartService.clearPreviousChart(element[0]);


                    var svg = chartService.getSvg(element[0]);
                    var tooltip = chartService.addTooltip(element[0]);


                    //Echelle des coordonnees
                    //Nice = On commence et termine un jour rond 
                    var scaleX = d3.time.scale().range([0, width]).domain(d3.extent(data, function (d) { return new Date(d.date); })).nice(d3.time.day);
                    var scaleY = d3.scale.linear().range([height, 0]).domain([0, d3.max(data, function (d) {return d.data; })]);

                    var line = chartService.setLineFunction(data, scaleX, scaleY);


                    //Axe des abscisses & ordonnees  + grille
                    //tickFormat = un tick seulement au changement de jour ( = 1 tick sur 6 car un tick tous les 6h)
                    var xAxis = chartService.setAxisVariable(scaleX, function (d, i) { return (i % 4 === 0) ? dateFormat(d) : ''; }, -height, 'bottom');
                    xAxis.ticks(d3.time.hours, 6);//tick toutes les 6h 

                    var yAxis = chartService.setAxisVariable(scaleY, d3.format(',.3d'), -width, 'left');


                    //Ajout des abscisses
                    svg.append('g')
                        .attr('class', 'x axis')
                        .attr('transform', 'translate(0,' + height + ')')
                        .call(xAxis)
                        .selectAll('text')
                        .style('font-size', '12px')
                        .style('text-anchor', 'start');


                    //Ajout ds ordonnee
                    svg.append('g')
                        .attr('class', 'y axis')
                        .call(yAxis);

                    svg.append('text')// Label ordonnes
                        .attr('transform', 'rotate(-90)')
                        .attr('x', -height / 2)
                        .attr('y', -margin.bottom / 2)
                        .style('text-anchor', 'middle')
                        .text('Température de l\'air (°C)')
                        .attr('class', 'label');


                    //Ajout donnees
                    svg.append('path')
                        .datum(data)
                        .attr('class', 'line')
                        .attr('d',  line);
                    
                    
                   //Ajout des seuils personnalises si ils existent
                    chartService.setSeuilsPreferencesStyle(svg, scaleY, userLimits, sensorName, 'airTemp', tooltip);                   
                    
                    //style des lignes de la grille
                    chartService.setStylesForXAndYAxes(svg, 'airTemp', scaleY);
                    //zone de hover  pour la tooltip
                    chartService.addTooltipHoverZone(svg, data, tooltip, scaleX, scaleY);*/
                };

                scope.$watch('dataTree', function () {
                    if (scope.dataTree !== undefined ) {
                        draw(dataTree);
                    }
                });
            }
        };
    }
]);
