/**
 * Created by Jose Leon on 10/3/2016.
 */
angular.module('exercise2',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
//
           $urlRouterProvider.otherwise('/home');

        $stateProvider
            /////////////////////HOME///////////////////
            .state('home',{
                url:'/home',
                templateUrl:'partial-home.html'
            })
            .state('home.list',{
                url:'/list',
                templateUrl:'partial-home-list.html',
                controller:function($scope){
                    $scope.dogs=['Bernese','Husky','Goldendoodle'];
                }
            })
            .state('home.paragraph',{
                url:'/paragraph',
                template:'I could sure use a drink right now.'
            })
            /////////////////ABOUT////////////////////
            .state('about',{
                url:'/about',
                views:{
                    '':{templateUrl:'partial-about.html'},//TEMPLATE RELATIVELY NAMED
                    /////////CHILDREN ABSOLUTELY NAMED
                    'columnOne@about':{template: 'Look I am a column'},
                    'columnTwo@about':{
                        templateUrl:'table-data.html',
                        controller:'pokeController'
                    }
                }
            });
    })
    .controller('pokeController',function($scope){
        $scope.message='test';
        $scope.pokes=[
            {
                name:'Bulbasaur',
                level:4
            },
            {
                name:'Charmander',
                level:10
            },
            {
                name:'Squirtle',
                level:9
            }
        ];
    });
