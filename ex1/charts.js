/**
 * Created by Jose Leon on 8/24/2016.
 */
angular.module("exercise1")    
    .directive("ex1Graph",function(){
        return {
            restrict:"E",
            template: function(){
                return "<select ng-model='pokemon' ng-options='data.pokemon.indexOf(poke) as poke.name for poke in data.pokemon' " +
                    "ng-change='changeChart()' class='form-control'></select>" +
                    "<select ng-model='type' ng-options='option for option in types' " +
                    "ng-change='changeChart()' class='form-control'></select>" +
                    "<canvas width='300' height='300'>";
            },
            scope:true,
            link:function(scope,elem,attrs){
                scope.changeChart();
            },
            controller:function($scope,$element,$attrs){
                $scope.types=['bar','line','pie'];
                $scope.type=$scope.types[0];
                $scope.pokemon = 0;
                var theChart;
                $scope.changeChart=function(){
                    if(angular.isDefined(theChart)){
                        theChart.destroy();
                    }
                    theChart = new Chart($element.find("canvas"), {
                        type: $scope.type,
                        data: {
                            labels: $scope.data.labels,
                            datasets: [{
                                label: $scope.data.pokemon[$scope.pokemon].name,
                                data: $scope.data.pokemon[$scope.pokemon].stats,
                                backgroundColor: [
                                    "rgba(255, 99, 132, 0.5)",
                                    "rgba(54, 162, 235, 0.5)",
                                    "rgba(255, 206, 86, 0.5)",
                                    "rgba(100, 192, 100, 0.5)",
                                    "rgba(153, 102, 255, 0.5)",
                                    "rgba(255, 159, 64, 0.5)"
                                ],
                                borderColor: [
                                    "rgba(255,99,132,1)",
                                    "rgba(54, 162, 235, 1)",
                                    "rgba(255, 206, 86, 1)",
                                    "rgba(100, 192, 100, 1)",
                                    "rgba(153, 102, 255, 1)",
                                    "rgba(255, 159, 64, 1)"
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            responsive: false,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                    });
                };
            }
        }
    });
