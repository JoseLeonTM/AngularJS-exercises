/**
 * Created by Jose Leon on 9/9/2016.
 */
angular.module("exercise1").directive("ex1Form",function($compile) {
    return {
        restrict: "E",
        scope:true,
        link: function(scope,element,attrs){
            var cur=0;
            scope.info=scope[attrs.info];
            if(scope.info[cur+1]){
                scope.info[cur].children.push({
                    node:'button',
                    class:'btn btn-primary',
                    content:'Next',
                    attrs:[{name:'ng-click',value:'next()'}]
                });
            }else{
                scope.info[cur].children.push({
                    node:'button',
                    class:'btn btn-primary',
                    content:'Create',
                    attrs:[{name:'ng-click',value:'create()'}]
                });
            }
            scope.formData={};
            var formName = scope.info[cur].name;
            scope.msg = {
                required: 'This field is required',
                number: 'The value has to be a number',
                date:'The value has to be a date',
                pattern:'The value can only contain letters',
                min: 'The value is too low',
                max: 'The value is too high',
                sameAs: 'The inputs don\'t match'
            };
            element.append(buildNode(scope.info[cur]));     ///////////CREATE AND APPEND FORM TO ELEMENT
            $compile(element.contents())(scope);    ///////////COMPILE THE CONTENTS
            scope.form=scope[formName];

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
                var elem=angular.element('<'+config.node+'>');
                if(config.node=='form'){
                    config.attrs= config.attrs? config.attrs : [];
                    config.attrs.push({name:'novalidate',value:true});
                }
                if(config.node=='fieldset'){
                    config.node='ng-form';
                }
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
                                        '(formData.'+config.children[i].name +'!= formData.'+attributes[e].value+') && '+formName+'.$submitted' :
                                        formName+'.'+config.children[i].name+'.$error.'+att+' && '+formName+'.$submitted';
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
            var inputs = element.find('input');
            for(var i=0; i<inputs.length; i++){
                inputs[i] = angular.element(inputs[i]);
                if(inputs[i].attr('sameAs')){
                    if(scope.formData[inputs[i].attr('name')] != scope.formData[inputs[i].attr('sameAs')]){
                        scope.form[inputs[i].attr('name')].$setValidity('sameAs',false);
                    }else{
                        scope.form[inputs[i].attr('name')].$setValidity('sameAs',true);
                    }
                }
            }
            scope.next=function(){
                if(scope.form.$valid){

                }
            };
            scope.create = function (){
                if(scope.form.$valid) {
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
                }
            }
        }
    }
});