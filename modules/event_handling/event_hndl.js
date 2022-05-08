



/* Event handling function*/
export function eventHndl(){};

eventHndl.prototype.Handler = function(p){
    var parentElementId = p['id'];
    var slideWidth = p['slidewidth'];
    var slideToshow = p['slideToshow'];
    var slideCount =  $('#' + parentElementId +'-container ul li').length;
    var sliderUlWidth = slideCount * (slideWidth / slideToshow);
    var mode = p['mode'];
    var auto = p['auto'];
    var Duration = p['duration'];
    var autoDirection = p['autoDirection'];
    var autoDelay = p['autoDelay'];
    var autoDuration = p['autoDuration'];
    var picslen = p["pics"].length;


    if(auto === null || auto  === false){
        auto = false;
    }else if (auto == true){
        auto = true;
    }else if (auto === "reverse"){
        auto = "reverse";
    }else{
        auto = false;
    }
    

    
    var st = {};
    st[parentElementId] = parentElementId;
    

                var c = 0;
                                            
                const arrows = document.querySelectorAll(".arrows-");
               
                // click event  
                function ClickEvent(){
                  
                    
                                    $("#" + parentElementId + "-arrow-right").click(function(){

                                       
                                      

                                        var arrowid = this.id.split("-")[2];
                                        var id = this.id.split("-")[0];

                                        DotHndling(arrowid);

                                        $('#' + this.id).attr("disabled", true);
                                        
                                            if(c < (3)){
                                            
                                                c = c + 1;
                                                
                                                
                                            }else if(mode === true){
                                                
                                                

                                            }else{
                                                return;
                                            }
                                        
                                        
                                            click(id,arrowid);
                                    });

                                    $("#" + parentElementId + "-arrow-left").click(function(){


                                     


                                        $('#' + this.id).attr("disabled", true);

                                        var arrowid = this.id.split("-")[2];
                                        var id = this.id.split("-")[0];

                                        DotHndling(arrowid);
                                    
                                        if(c > 0 && c <= 3){
                                        c = c - 1;
                                    
                                        }else if(mode === true){
                                                

                                        }else{
                                        
                                            return;
                                        }
                                        
                                    
                                        click(id,arrowid);

                                });
                          
                                function click(id,arrowid){

                                   
                                
                                   
                                   
                                        auto = false;

                                        var clickMode = true;
                                        

                                       
                                        

                           
                                        clearInterval(st[parentElementId]);
                                       
                                       

                                        let duration = Duration;

                                        AnimateEvent(parentElementId,arrowid,auto,clickMode,duration);
                                       
                                        auto = true;
                                            Auto();

                                        
                                       
                                }
                                
                                

                };
                
                ClickEvent();
               
                
               
                var index = 0;

                // Dot Event
                function DotHndling(dir){

                    

                    var dotId = parseInt(($('#' + parentElementId +'-container ul li img:first-child')[1].id).split("_")[1]);
                    

                    

                    
                    if(dir === "right"){
                            
                                if(index === (picslen - 1)){
                                    $("#" + parentElementId + "_" + (index) + "_dots_circles").css({opacity:"0.7",background:"#a9a9a9"});
                                
                                    index = 0;

                                    $("#" + parentElementId + "_" + (index) + "_dots_circles").css({opacity:"1",background:"black"});
                                
                                }
                                else{

                            
                                    index = index + 1;
                    
                                $("#" + parentElementId + "_" + (index - 1) + "_dots_circles").css({opacity:"0.7",background:"#a9a9a9"});
                                
                                $("#" + parentElementId + "_" + (index) + "_dots_circles").css({opacity:"1",background:"black"});
                                
                        
                            }
                            

                    }else if(dir === "left"){

                        

                        
                        if(index === 0){
                            $("#" + parentElementId + "_" + (index) + "_dots_circles").css({opacity:"0.7",background:"#a9a9a9"});
                           
                            
                            index = picslen;
                        

                            $("#" + parentElementId + "_" + (index) + "_dots_circles").css({opacity:"1",background:"black"});
                        

                        }
                        index = index - 1;

                        $("#" + parentElementId + "_" + (index + 1) + "_dots_circles").css({opacity:"0.7",background:"#a9a9a9"});
                                
                        $("#" + parentElementId + "_" + (index) + "_dots_circles").css({opacity:"1",background:"black"});
                        




                        
                    }

                 

                }
                



                // Animate Event
                function AnimateEvent(parentElementId,arrowId,auto,clickMode,duration){
                    
                   
              
                    var anim = {
                                false:{ 
                                    true:{"left":{left:- ((slideWidth/slideToshow) + (slideWidth/slideToshow))},"right":{left:0}},
                                    false:{"left":{right: ( ((slideWidth/slideToshow) * (picslen - c)) - slideWidth) },"right":{right: ( ((slideWidth/slideToshow) * (picslen - c)) - slideWidth)}}
                                },
                                true:{true:{"left":{left:- ((slideWidth/slideToshow) + (slideWidth/slideToshow))},"right":{left:0}}},
                                "reverse":{"right":(((slideWidth/slideToshow) * (picslen - c)) - slideWidth) },"right":{right: ( ((slideWidth/slideToshow) * (picslen - c)) - slideWidth)}
                                


                        };
                       
                       
                    
                        $('#' + parentElementId +'-container ul').animate(anim[auto][mode][arrowId],duration,function(){
              
                        if(mode !== true){

                       
                            
                        }else{
                            
                     
                            

                            if(arrowId  === "right"){


                                $('#' + parentElementId +'-container ul li:last-child').prependTo('#' + parentElementId +'-container ul');

                                $('#' + parentElementId +'-container ul').css('left', - (slideWidth/slideToshow) );

                                $('#' + parentElementId +  "-arrow-"  + arrowId).attr("disabled", false);
                                
                               
                          
                                
                                
                            
                            }else if(arrowId  === "left"){

                         

                                $('#' + parentElementId +'-container ul li:first-child').appendTo('#' + parentElementId +'-container ul');
                               
                              
                                $('#' + parentElementId +'-container ul').css('left', - (slideWidth/slideToshow) );


                                $('#' + parentElementId +  "-arrow-"  + arrowId).attr("disabled", false);
                                
                           
                                
                            }
                                 
                        
                        }

                  
                     if(clickMode === true){
                       
                    
                     }

                    });
                }

            function Auto(){
 
                if(auto === true && mode === true){
                    st[parentElementId] =   setInterval(() => {
                        
                        AnimateEvent(parentElementId,autoDirection,auto,false,Duration);

                        
                        DotHndling(autoDirection);
                     
                       
                          },5000);
                        }
                        
                         
                
            }
          
            if(auto === true && mode === true){

                Auto();
            }
          






}

