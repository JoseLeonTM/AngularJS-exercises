/**
 * Created by Jose Leon on 9/9/2016.
 */
angular.module("exercise1").directive("formVal",function($compile) {
    return {
        restrict: "E",
        scope:true,
        link: function(scope,element,attrs){
            scope.cur=0;
            scope.info=scope[attrs.info];

            scope.formData={};
            var formName=[];
            for(var o=0; o<scope.info.length;o++){
                formName.push(scope.info[o].name);
            }
            scope.msg = {
                required: 'This field is required',
                number: 'The value has to be a number',
                date:'The value has to be a date',
                pattern:'The value can only contain letters',
                min: 'The value is too low',
                max: 'The value is too high',
                sameAs: 'The inputs don\'t match'
            };
            element.append(angular.element('<form>')
                .attr('name','myForm')
                .attr('novalidate','novalidate'));         ///////////APPEND FORM TO ELEMENT
            var myForm = element.find('form');
            myForm.append(buildNode(scope.info[scope.cur]));     ///////////BUILD NG-FORM IN FORM

            myForm.append(angular.element('<button>')       ///////////APPEND A 'NEXT' BUTTON
                .text('Next')
                .addClass('btn btn-primary')
                .attr('name','next')
                .attr('ng-click','next()')
                .attr('ng-show','cur<(info.length-1)'));

            myForm.append(angular.element('<button>')       ////////APPEND A 'CREATE' BUTTON
                .text('Create')
                .addClass('btn btn-primary')
                .attr('name','create')
                .attr('ng-click','create()')
                .attr('ng-show','cur==(info.length-1)'));

            $compile(element.contents())(scope);            ///////////COMPILE THE CONTENTS
            scope.formV=scope[formName[scope.cur]];
            scope.formV.$notFinished=false;

            function fillAttrs(elem,attrs){
                    for(var i=0; i<attrs.length;i++){
                        if(attrs[i].name=='ng-model'){
                            attrs[i].value='formData.'+elem.attr('name');
                        }
                        var value = attrs[i].value ? attrs[i].value : true;
                        elem.attr(attrs[i].name,value);
                    }
                }
            function buildNode(config){
                if(config.node=='form'){
                    config.node='ng-form';
                    config.attrs= config.attrs || [];
                    config.attrs.push({name:'ng-show',value:'formV=='+formName[scope.cur]});
                }
                var elem=angular.element('<'+config.node+'>');
                if(config.class){
                    elem.addClass(config.class);
                }
                if(config.content){
                    elem.text(config.content);
                }
                if(config.name){
                    elem.attr('name',config.name);
                }
                if(config.attrs) {
                    fillAttrs(elem,config.attrs);
                }
                if(config.children) {
                    for(var i=0;i<config.children.length;i++){
                        elem.append(buildNode(config.children[i]));
                        if(config.children[i].node=='input') {
                            var attributes = config.children[i].attrs;
                            for(var e=0;e<attributes.length;e++){
                                var att = attributes[e].name=='type' ? attributes[e].value : attributes[e].name;
                                if(scope.msg[att]){
                                    var value = att=='sameAs' ?
                                        '(formData.'+config.children[i].name +'!= formData.'+attributes[e].value+') && '+formName[scope.cur]+'.$notFinished' :
                                        formName[scope.cur]+'.'+config.children[i].name+'.$error.'+att+' && '+formName[scope.cur]+'.$notFinished';
                                    elem.append(buildNode({
                                        node: 'span',
                                        class:'error',
                                        content:scope.msg[att],
                                        attrs:[{name:'ng-if',
                                            value:value
                                        }]
                                    }));
                                }
                                if(att=='dateConfig'){
                                    elem.find('input[type="date"]').datepicker(attributes[e].value);
                                }
                            }
                        }
                    }
                }
                return elem;
            }
            function checkSame() {
                var form= element.children().eq(scope.cur);
                var inputs = form.find('input');
                for (var i = 0; i < inputs.length; i++) {
                    inputs[i] = angular.element(inputs[i]);
                    if (inputs[i].attr('sameAs')) {
                        if (scope.formData[inputs[i].attr('name')] != scope.formData[inputs[i].attr('sameAs')]) {
                            scope.formV[inputs[i].attr('name')].$setValidity('sameAs', false);
                        } else {
                            scope.formV[inputs[i].attr('name')].$setValidity('sameAs', true);
                        }
                    }
                }
            }
            scope.next=function(){
                checkSame();
                if(scope.formV.$valid){
                    scope.formV.$notFinished=false;
                    myForm.prepend(buildNode(scope.info[++scope.cur]));
                    $compile(element.contents())(scope);            ///////////COMPILE THE CONTENTS
                    scope.formV=scope[formName[scope.cur]];
                }else{
                    scope[formName[scope.cur]].$notFinished=true;
                }
            };
            scope.create = function (){
                checkSame();
                if(scope.formV.$valid) {
                    scope[formName[scope.cur]].$notFinished=false;
                    var done=false;
                    var data = {
                        name: scope.formData.name,
                        stats: [
                            scope.formData.hp,
                            scope.formData.atk,
                            scope.formData.def,
                            scope.formData.spd,
                            scope.formData.spatk,
                            scope.formData.spdef
                        ]
                    };
                    for(var i=0;i<scope.data.pokemon.length;i++){
                        if(data.name==scope.data.pokemon[i].name){
                            scope.data.pokemon[i].stats=data.stats;
                            done=true;
                        }
                    }
                    if(!done) {
                        scope.data.pokemon.push(data);
                    }
                }else{
                    scope[formName[scope.cur]].$notFinished=true;
                }
            }
        }
    }
});