/**
 * Created by Jose Leon on 9/30/2016.
 */
angular.module('exercise1')
    .directive('ex1Censor1',function(){
        return{
            restrict:'A',
            scope:{},
            link:function(scope,element,attr){
                scope.text=element.text();
                var regex= new RegExp('\\S','g');
                console.log(element.text().match(regex));
                scope.replaced=scope.text.replace(regex,"*");
                // element.text().replace(regex,function(){
                //     return '*';
                // });
                console.log(scope.replaced);
                element.text(scope.replaced);
            }
        }
    })
    .directive('ex1Censor2',function(){
        return{
            restrict:'A',
            scope:{},
            link:function(scope,element,attr){
                var regex= new RegExp('\\S','g');
                // console.log(element.text().match(regex));
                // scope.replaced=scope.text.replace(regex,"*");
                element.text(element.text().replace(regex,"*"));
            }
        }
    });
