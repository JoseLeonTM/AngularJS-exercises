/**
 * Created by Jose Leon on 8/24/2016.
 */
angular.module("exercise1",['pokemon','ngRoute'])
    .config(function($routeProvider,$locationProvider){
        $locationProvider.html5Mode(true);

        $routeProvider
            .when("/charts",{
            templateUrl:"charts.html"
            })
            .when("/spread",{
                templateUrl:"spreadsheet.html"
            })
            .when("/gallery",{
                templateUrl:"infinite.html"
            })
            .when("/form",{
                templateUrl:"form.html"
            })
            .when("/multiform",{
                templateUrl:"multiform.html"
            })
            .when("/censor",{
                templateUrl:"censor.html"
            })
            .otherwise({
            templateUrl:"charts.html"
            });
    })
    .controller("pokeCtrl",function($scope,pokeData){
        $scope.data={
            labels:pokeData.getLabels(),
            pokemon:pokeData.getData()
        };
        $scope.form=[{
            node:'form',
            name:'newPokemon',
            children:[
                {node:'div', class:'form-group', children:[
                    {node:'label', content:'Name:'},
                    {node:'input', class:'form-control', name:'name', attrs:[
                        {name:'type',value:'text'},
                        {name:'pattern',value:'[\\D]+'},
                        {name:'required'},
                        {name:'sameAs',value:'name2'},
                        {name:'ng-model'}
                    ]}
                ]},
                {node:'div', class:'form-group', children:[
                    {node:'label', content:'Repeat Name:'},
                    {node:'input', class:'form-control', name:'name2', attrs:[
                        {name:'type',value:'text'},
                        {name:'pattern',value:'[\\D]+'},
                        {name:'required'},
                        {name:'sameAs',value:'name'},
                        {name:'ng-model'}
                    ]}
                ]},
                {node:'div', class:'form-group', children:[
                    {node:'label', content:'Date of capture:'},
                    {node:'input', class:'form-control', name:'date', attrs:[
                        {name:'type',value:'date'},
                        {name:'dateConfig',value:{
                            dateFormat:'yy-mm-dd',
                            defaultDate:0,
                            maxDate:0,
                            minDate:'-91y'
                        }
                        },
                        {name:'required'},
                        {name:'ng-model'}
                    ]}
                ]},
                {node:'fieldset',children:[
                        {node:'legend', content:'Stats',children:[
                            ]},
                        {node:'div', class:'form-group stats', children:[
                            {node:'label', content:'Health Points:'},
                            {node:'input', class:'form-control', name:'hp', attrs:[
                                {name:'type',value:'number'},
                                {name:'max',value:500},
                                {name:'min',value:1},
                                {name:'required'},
                                {name:'ng-model'}
                            ]}
                        ]},
                        {node:'div', class:'form-group stats', children:[
                            {node:'label', content:'Attack:'},
                            {node:'input', class:'form-control', name:'atk', attrs:[
                                {name:'type',value:'number'},
                                {name:'max',value:300},
                                {name:'min',value:1},
                                {name:'required'},
                                {name:'ng-model'}
                            ]}
                        ]},
                        {node:'div', class:'form-group stats', children:[
                            {node:'label', content:'Defense:'},
                            {node:'input', class:'form-control', name:'def', attrs:[
                                {name:'type',value:'number'},
                                {name:'max',value:300},
                                {name:'min',value:1},
                                {name:'required'},
                                {name:'ng-model'}
                            ]}
                        ]},
                        {node:'div', class:'form-group stats', children:[
                            {node:'label', content:'Speed:'},
                            {node:'input', class:'form-control', name:'spd', attrs:[
                                {name:'type',value:'number'},
                                {name:'max',value:300},
                                {name:'min',value:1},
                                {name:'required'},
                                {name:'ng-model'}
                            ]}
                        ]},
                        {node:'div', class:'form-group stats', children:[
                            {node:'label', content:'Special Attack:'},
                            {node:'input', class:'form-control', name:'spatk', attrs:[
                                {name:'type',value:'number'},
                                {name:'max',value:300},
                                {name:'min',value:1},
                                {name:'required'},
                                {name:'ng-model'}
                            ]}
                        ]},
                        {node:'div', class:'form-group stats', children:[
                            {node:'label', content:'Special Defense:'},
                            {node:'input', class:'form-control', name:'spdef', attrs:[
                                {name:'type',value:'number'},
                                {name:'max',value:300},
                                {name:'min',value:1},
                                {name:'required'},
                                {name:'ng-model'}
                            ]}
                        ]}
                    ]
                }
            ]
        }];
        $scope.multiform=[
            {
                node:'form',
                name:'pokeName',
                children:[
                    {node:'div', class:'form-group',children:[
                        {node:'label',content:'Name:'},
                        {node:'input',name:'name',class:'form-control',attrs:[
                            {name:'required'},
                            {name:'pattern',value:'[\\D]+'},
                            {name:'sameAs',value:'name2'},
                            {name:'ng-model'}
                        ]}
                    ]},
                    {node:'div', class:'form-group',children:[
                        {node:'label',content:'Repeat Name:'},
                        {node:'input',name:'name2',class:'form-control',attrs:[
                            {name:'required'},
                            {name:'pattern',value:'[\\D]+'},
                            {name:'sameAs',value:'name'},
                            {name:'ng-model'}
                        ]}
                    ]}
                ]
            },      /////////END OF FIRST STEP
            {
                node:'form',
                name:'pokeMisc',
                children:[
                    {node:'div', class:'form-group',children:[
                        {node:'label',content:'Level:'},
                        {node:'input',name:'level',class:'form-control',attrs:[
                            {name:'type',value:'number'},
                            {name:'required'},
                            {name:'min',value:1},
                            {name:'max',value:100},
                            {name:'ng-model'}
                        ]}
                    ]},
                    {node:'div', class:'form-group',children:[
                        {node:'label',content:'Date of Capture:'},
                        {node:'input',name:'date',class:'form-control',attrs:[
                            {name:'required'},
                            {name:'dateConfig',value:{
                                dateFormat:'yy-mm-dd',
                                defaultDate:0,
                                maxDate:0,
                                minDate:'-91y'
                            }},
                            {name:'type',value:'date'},
                            {name:'ng-model'}
                        ]}
                    ]}
                ]
            },      ///////END OF SECOND STEP
            {
                node:'form',
                name:'pokeStats',
                children:[
                    {node:'div', class:'form-group stats', children:[
                        {node:'label', content:'Health Points:'},
                        {node:'input', class:'form-control', name:'hp', attrs:[
                            {name:'type',value:'number'},
                            {name:'max',value:500},
                            {name:'min',value:1},
                            {name:'required'},
                            {name:'ng-model'}
                        ]}
                    ]},
                    {node:'div', class:'form-group stats', children:[
                        {node:'label', content:'Attack:'},
                        {node:'input', class:'form-control', name:'atk', attrs:[
                            {name:'type',value:'number'},
                            {name:'max',value:300},
                            {name:'min',value:1},
                            {name:'required'},
                            {name:'ng-model'}
                        ]}
                    ]},
                    {node:'div', class:'form-group stats', children:[
                        {node:'label', content:'Defense:'},
                        {node:'input', class:'form-control', name:'def', attrs:[
                            {name:'type',value:'number'},
                            {name:'max',value:300},
                            {name:'min',value:1},
                            {name:'required'},
                            {name:'ng-model'}
                        ]}
                    ]},
                    {node:'div', class:'form-group stats', children:[
                        {node:'label', content:'Speed:'},
                        {node:'input', class:'form-control', name:'spd', attrs:[
                            {name:'type',value:'number'},
                            {name:'max',value:300},
                            {name:'min',value:1},
                            {name:'required'},
                            {name:'ng-model'}
                        ]}
                    ]},
                    {node:'div', class:'form-group stats', children:[
                        {node:'label', content:'Special Attack:'},
                        {node:'input', class:'form-control', name:'spatk', attrs:[
                            {name:'type',value:'number'},
                            {name:'max',value:300},
                            {name:'min',value:1},
                            {name:'required'},
                            {name:'ng-model'}
                        ]}
                    ]},
                    {node:'div', class:'form-group stats', children:[
                        {node:'label', content:'Special Defense:'},
                        {node:'input', class:'form-control', name:'spdef', attrs:[
                            {name:'type',value:'number'},
                            {name:'max',value:300},
                            {name:'min',value:1},
                            {name:'required'},
                            {name:'ng-model'}
                        ]}
                    ]}
                ]
            }       ///////////END OF THIRD STEP
        ]
    });