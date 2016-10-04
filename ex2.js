/**
 * Created by Jose Leon on 10/3/2016.
 */
angular.module('exercise2',['pokemon','ui.router'])
    .config(function($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise({
            templateUrl:"/charts"
        });
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'home.html'
            })
            .state('about',{
                url:'/about',
                templateUrl:'about.html'
            });
            // .state('censor',{
            //     url:'/censor',
            //     templateUrl:'censor.html'
            // })
    })
    .controller('uiCtrl',function($scope,pokeData){
        $scope.data={
            labels:pokeData.getLabels(),
            pokemon:pokeData.getData()
        };
    });