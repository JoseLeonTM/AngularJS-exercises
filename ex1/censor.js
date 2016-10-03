/**
 * Created by Jose Leon on 9/30/2016.
 */
angular.module('exercise1')
    .directive('ex1Censor1',function(){
        return{
            restrict:'A',
            scope:{},
            link:function(scope,element,attr){
                element.css('backgroundColor','#000');
                element.css('color','#000');
            }
        }
    })
    .directive('ex1Censor2',function(){
        return{
            restrict:'A',
            scope:{},
            link:function(scope,element,attr){
                var regex= new RegExp('\\S','g');
                element.text(element.text().replace(regex,"*"));
                element.css('backgroundColor','#000');
                element.css('color','#000');
            }
        }
    });
