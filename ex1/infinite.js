/**
 * Created by Jose Leon on 8/30/2016.
 */
angular.module("exercise1")
    .directive("ex1Infinite",function($http){
        return{
            restrict:"E",
            scope:true,
            link:function(scope,element,$attrs){
                var gallery=[], prev=[], next=[], pages=[''],atEnd=true,busy=false,first=0,last=0;
                element.attr('id','container');
                function getMore(holder,page){           ///////////////////REQUEST MORE IMAGES
                    busy=true;
                    $http.get('http://infinigag.k3min.eu/gaming/'+page)
                        .then(function(data){
                            if(pages.indexOf(data.data.paging.next)==-1) {
                                pages.push(data.data.paging.next);
                            }
                            holder.push(data.data.data);
                            if(element.children().length==0){
                                fillGallery(holder[0]);
                                getMore(next,pages[1]);
                            }
                            busy=false;
                        },
                        function(error){
                            console.log("Error "+error.status+": "+error.statusText);
                            busy=false;
                        });
                }
                function fillGallery(images){           ///////////////////INSERT IMAGES IN DOM
                    var block = angular.element('<div>').addClass('block10'), i;
                    for (i = 0; i < images.length; i++) {
                        block.append(angular.element('<div>').addClass('galleryImg').append(angular.element("<img>").addClass('galleryPic').attr('src', images[i].images.cover).attr('title',images[i].caption)));
                    }
                    if(atEnd){
                        element.append(block);
                        last=element.children().length;
                    }else{
                        var empty=element.children().eq(first);
                        empty.replaceWith(block);
                    }
                }
                function cutGallery(index){         ////////REMOVE IMAGES AND REPLACE WITH EMPTY DIV
                    var target = element.children().eq(index);
                    if(atEnd) {
                        target.replaceWith(angular.element('<div>').css('height',document.querySelector('.block10').scrollHeight+'px'));
                        prev=[];
                        prev.push(gallery.shift());
                    }else{
                        next=[];
                        next.push(gallery.pop());
                        element.children().eq(last).remove();
                    }
                }
                function addLast(){                 ///////////////////////////ADD IMAGES AT THE END
                    atEnd=true;
                    gallery.push.apply(gallery,next);
                    next=[];
                    getMore(next,pages[pages.length-1]);
                }
                function addFirst(){
                    atEnd=false;
                    gallery.unshift.apply(gallery,prev);
                    prev=[];
                    if(first>0) {
                        getMore(prev, pages[first - 1]);
                    }
                }

                getMore(gallery,pages[0]);  //////////////INITIALIZE
                angular.element(element).on('scroll',function(){   //////////////////////SCROLL EVENT
                    var contH = document.querySelector('#container').offsetHeight;
                    if(!busy) {
                        if (window.scrollY > (contH - 240)) {
                            addLast();
                            fillGallery(gallery[gallery.length - 1]);
                            if (gallery.length > 5) {
                                cutGallery(first++);
                            }
                        }
                        if(window.scrollY<(first*document.querySelector('.block10').offsetHeight)){
                            first--;
                            addFirst();
                            fillGallery(gallery[0]);
                            cutGallery(--last);
                            pages.pop();
                        }
                    }
                });
                scope.$on("$destroy",function(){
                    angular.element(element).off('scroll');
                });
            }
        }
    });