/**
 * Created by Jose Leon on 10/4/2016.
 */
angular.module('exercise3',[])
    .directive('note',function(){
        return{
            restrict:'E',
            scope:{
                id:"@noteid"
            },
            templateUrl:'note.html',
            replace:true,
            link:function(scope,element,attr){
                if(attr.note){
                    scope.note=angular.fromJson(attr.note);
                    scope.editable=false;
                }else{
                    scope.note={};
                    scope.editable=true;
                }
                scope.save=function(){
                    scope.editable=false;
                    sessionStorage.setItem(scope.id,angular.toJson(scope.note));
                };
                scope.edit=function(){
                    scope.editable=true;
                };
                scope.delete=function(){
                    sessionStorage.setItem(scope.id,'');
                    element.remove();
                };
            }
        }
    })
    .directive('startNotes',function($compile){
        return{
            restrict:'A',
            link:function(scope,element){
                for (var i = 0; i < sessionStorage.length; i++) {
                    var note = sessionStorage.getItem(i);
                    if(note!='') {
                        element.append(angular.element('<note>')
                            .attr('noteid', i)
                            .attr('note', note));
                    }
                }
                $compile(element.contents())(scope);
            }
        }
    })
    .controller('noteCtrl',function($scope,$compile){
        var container= angular.element(document.getElementById('noteContainer'));
        var id=sessionStorage.length;
        $scope.getId=function(){
            return id++;
        };
        $scope.newNote=function(){
            container.append(angular.element('<note>').attr('noteid',$scope.getId()));
            $compile(container.children().eq(container.children().length-1))($scope);
        };
        $scope.eraseNotes=function(){
            var notes=container.children();
            for(var i=0; i<notes.length;i++){
                notes[i]=angular.element(notes[i]);
                sessionStorage.setItem(notes[i].attr('noteid'),'');
                notes[i].remove();
            }
        };
    });