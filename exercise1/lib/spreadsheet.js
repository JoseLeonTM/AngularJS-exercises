/**
 * Created by Jose Leon on 8/29/2016.
 */
angular.module("exercise1")
    .directive("spreadsheet",function(){
        return{
            restrict:"E",
            scope:true,
            template:
            "<table class='table table-striped table-bordered'>" +
                "<thead>" +
                    "<th colspan='7' class='text-center'>Pokemon in Smash Bros.</th></thead>"+
                    "<tr><td>Name</td><td ng-repeat='stat in data.labels' ng-bind='stat'></td></tr>"+
                "</thead>" +
                "<tbody>"+
                "<tr ng-repeat='pokemon in data.pokemon'>" +
                    "<td><input ng-model='pokemon.name' ng-change='checkEmpty(pokemon)' class='inputs'/></td>"+
                    "<td ng-repeat='stat in pokemon.stats track by $index'>" +
                    "<input ng-model='stat' class='inputs inputStat text-right' ng-change='updateStats(stat,$index,pokemon)'/></td>"+
                "</tr>"+
                "</tbody>"+
            "</table>",
            link:function($scope,$element,$attrs){
                $scope.updateStats=function(stat,index,poke){
                    poke.stats[index]=stat;
                    $scope.checkEmpty(poke);
                };
                $scope.checkEmpty=function(poke){
                    var empty=true;
                    if(poke.name==''){
                        for(var i=0;i<poke.stats.length;i++){
                            if(poke.stats[i]!=""){
                                empty=false;
                            }
                        }
                        if(empty){
                            console.log("empty");
                            $scope.data.pokemon.splice($scope.data.pokemon.indexOf(poke),1);
                            // console.log($scope.data.pokemon.indexOf(poke));
                        }
                    }
                }
            }
        }
    });