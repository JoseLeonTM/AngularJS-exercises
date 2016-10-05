/**
 * Created by Jose Leon on 10/4/2016.
 */
angular.module('exercise3',[])
    .directive('note',function(){
        return{
            restrict:'E',
            scope:{
                // editable:true
            },
            templateUrl:'note.html',
            replace:true,
            link:function(scope,element,attr){
                scope.editable=true;
                scope.accept=function(){
                    scope.editable=false;
                    console.log(scope.editable);
                    console.log(element.find('input'));
                    scope.note={
                        title:element.find('input').text(),
                        text:element.find('textarea').text()
                    };
                    console.log(scope.note);
                };
                scope.edit=function(){
                    scope.editable=true;
                    console.log(scope.editable);
                };
                scope.delete=function(){
                    var parent= element.parent();
                    console.log(parent);
                    element.remove();
                };
                console.log(scope.editable);
            }
        }
    })
    .controller('noteCtrl',function($scope,$compile){
        var container= angular.element(document.getElementById('noteContainer'));
        $scope.newNote=function(){
            container.append(angular.element('<note>'));
            $compile(container.contents())($scope);
        }
    });