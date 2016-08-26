/**
 * Created by Jose Leon on 8/24/2016.
 */
angular.module("exercise1")
    .controller("charts",function($scope,$http){
        $scope.getData=function(){
            $http.get("data.json").success(function(data){
                return data;
            });
        };
        $scope.types=['bar','line','pie'];
        $scope.type='pie';
        // $scope.data={
        //     labels: ["Apples", "Blueberries", "Bananas", "Pears", "Grapes", "Oranges"],
        //     dataSets:[{
        //         label: 'Fruits sold',
        //         data: [12, 19, 7, 15, 5, 10],
        //         backgroundColor: [
        //             'rgba(255, 99, 132, 0.5)',
        //             'rgba(54, 162, 235, 0.5)',
        //             'rgba(255, 206, 86, 0.5)',
        //             'rgba(100, 192, 100, 0.5)',
        //             'rgba(153, 102, 255, 0.5)',
        //             'rgba(255, 159, 64, 0.5)'
        //         ],
        //         borderColor: [
        //             'rgba(255,99,132,1)',
        //             'rgba(54, 162, 235, 1)',
        //             'rgba(255, 206, 86, 1)',
        //             'rgba(100, 192, 100, 1)',
        //             'rgba(153, 102, 255, 1)',
        //             'rgba(255, 159, 64, 1)'
        //         ],
        //         borderWidth: 1
        //     }]
        // }
    })
    .directive("ex1Graph",function(){
        return {
            restrict:"E",
            // replace:false,
            template: function(){
                return "<select ng-model='type' ng-options='label for value in types' ng-change='changeChart()'></select>" +
                    // "<option disabled selected>Chart Type</option> </select>" +
                    "<canvas width='300' height='350'>";
            },
            scope:{
                type:'=type',
                dataSets:'=data'

            },
            link: function (scope, elem, attrs) {
                // var ctx=angular.element("<canvas>");
                // ctx.attr("height","200px");
                // ctx.attr("width","350px");
                // scope.data.types=['bar','line','pie'];
                // scope.data.type='pie';
                console.log(scope.type);
                var getType=function(){
                    return scope.type;
                };
                // var options= angular.element("<select>");
                // for(var i=0; i<scope.types.length; i++){
                //     options.append(angular.element("<option>").html(scope.types[i]));
                // }
                // elem.append(options);
                // elem.append(ctx);
                // newChart();

                // var theChart = new Chart(elem.find("canvas"), {
                //     type:$scope.type,
                //     data: {
                //         labels: ["Apples", "Blueberries", "Bananas", "Pears", "Grapes", "Oranges"],
                //         datasets: [{
                //             label: 'Fruits sold',
                //             data: [12, 19, 7, 15, 5, 10],
                //             backgroundColor: [
                //                 'rgba(255, 99, 132, 0.5)',
                //                 'rgba(54, 162, 235, 0.5)',
                //                 'rgba(255, 206, 86, 0.5)',
                //                 'rgba(100, 192, 100, 0.5)',
                //                 'rgba(153, 102, 255, 0.5)',
                //                 'rgba(255, 159, 64, 0.5)'
                //             ],
                //             borderColor: [
                //                 'rgba(255,99,132,1)',
                //                 'rgba(54, 162, 235, 1)',
                //                 'rgba(255, 206, 86, 1)',
                //                 'rgba(100, 192, 100, 1)',
                //                 'rgba(153, 102, 255, 1)',
                //                 'rgba(255, 159, 64, 1)'
                //             ],
                //             borderWidth: 1
                //         }]
                //     },
                //     options: {
                //         responsive:false,
                //         scales: {
                //             yAxes: [{
                //                 ticks: {
                //                     beginAtZero:true
                //                 }
                //             }]
                //         }
                //     }
                // });
                // function changeChart(){
                //     theChart.type=$scope.type;
                // }
            },
            controller:function($scope,$element,$attrs){

                // var theChart = new Chart($element.find("canvas"), {
                //     type:$scope.type,
                //     data: {
                //         labels: $scope.data.labels,
                //         datasets: $scope.data.dataSets
                //     },
                //     options: {
                //         responsive:false,
                //         scales: {
                //             yAxes: [{
                //                 ticks: {
                //                     beginAtZero:true
                //                 }
                //             }]
                //         }
                //     }
                // });
                // function changeChart(){
                //     theChart.type=$scope.type;
                // }
            }
        }
    });
