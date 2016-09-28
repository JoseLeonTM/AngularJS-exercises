/**
 * Created by Jose Leon on 8/24/2016.
 */
angular.module("exercise1",['pokemon','ngRoute'])
    .config(function($routeProvider,$locationProvider){
        $locationProvider.html5Mode(true);

        $routeProvider.when("/charts",{
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
                            {node:'label', content:'Health Points:', attrs:[{name:'id',value:'hp'}]},
                            {node:'input', class:'form-control', name:'hp', attrs:[
                                {name:'type',value:'number'},
                                {name:'max',value:500},
                                {name:'min',value:1},
                                {name:'required'},
                                {name:'ng-model'}
                            ]}
                        ]},
                        {node:'div', class:'form-group stats', children:[
                            {node:'label', content:'Attack:', attrs:[{name:'id',value:'atk'}]},
                            {node:'input', class:'form-control', name:'atk', attrs:[
                                {name:'type',value:'number'},
                                {name:'max',value:300},
                                {name:'min',value:1},
                                {name:'required'},
                                {name:'ng-model'}
                            ]}
                        ]},
                        {node:'div', class:'form-group stats', children:[
                            {node:'label', content:'Defense:', attrs:[{name:'id',value:'def'}]},
                            {node:'input', class:'form-control', name:'def', attrs:[
                                {name:'type',value:'number'},
                                {name:'max',value:300},
                                {name:'min',value:1},
                                {name:'required'},
                                {name:'ng-model'}
                            ]}
                        ]},
                        {node:'div', class:'form-group stats', children:[
                            {node:'label', content:'Speed:', attrs:[{name:'id',value:'spd'}]},
                            {node:'input', class:'form-control', name:'spd', attrs:[
                                {name:'type',value:'number'},
                                {name:'max',value:300},
                                {name:'min',value:1},
                                {name:'required'},
                                {name:'ng-model'}
                            ]}
                        ]},
                        {node:'div', class:'form-group stats', children:[
                            {node:'label', content:'Special Attack:', attrs:[{name:'id',value:'spatk'}]},
                            {node:'input', class:'form-control', name:'spatk', attrs:[
                                {name:'type',value:'number'},
                                {name:'max',value:300},
                                {name:'min',value:1},
                                {name:'required'},
                                {name:'ng-model'}
                            ]}
                        ]},
                        {node:'div', class:'form-group stats', children:[
                            {node:'label', content:'Special Defense:', attrs:[{name:'id',value:'spdef'}]},
                            {node:'input', class:'form-control', name:'spdef', attrs:[
                                {name:'type',value:'number'},
                                {name:'max',value:300},
                                {name:'min',value:1},
                                {name:'required'},
                                {name:'ng-model'}
                            ]}
                        ]}
                    ]
                },
                // {node:'button', class:'btn btn-primary', content:'Create', attrs:[{name:'ng-click',value:'create()'}]}
            ]
        }]
    });