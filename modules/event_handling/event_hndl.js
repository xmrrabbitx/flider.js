



/* Event handling function*/
export function eventHndl(){};

eventHndl.prototype.Handler = function(p,slidewidth){

    // init variables
    var parentElementId = p['id'];
    var slideWidth = slidewidth;
    var slideToshow = p['slideToshow'];
    var slideCount =  $('#' + parentElementId +'-container ul li').length;
    var sliderUlWidth = slideCount * (slideWidth / slideToshow);
    var infinite_State = p['infinite'];
    var auto = p['auto'];
    var Duration = p['duration'];
    var autoDirection = p['autoDirection'];
    var autoDelay = p['autoDelay'];
    var autoDuration = p['autoDuration'];
    var picslen = p["pics"].length;
    var area = p['area'];
    var direction = p['direction'];



    var st = {};
    st[parentElementId] = parentElementId;

    var index = 0;

    var cliclLock = true;

                        
                const arrows = document.querySelectorAll(".arrows-");
               
                // index handler
                function indexHndl(dir){
                    if(dir ==="right"){
                    if(infinite_State){

                        if(index <= 0){
                            index = picslen-1;
                        }else{
                        index--;
                        }
                    }else{
                        
                            if(index > 0){
                            index--;

                        
                            }
                     
                    }

                }else{


                    if(infinite_State){
                                            
                        if(index >= (picslen-1)){
                            index = 0;
                        }else{
                        index++;
                        }
                    }else{
                        
                            if(index < (picslen-1)){
                            index++;
                            }
                        

                    }

                }

                  
                   
                }


                // click event  
                function ClickEvent(){
                  

                                    for(let i=0; i < picslen; i++){

                                        $("#" + parentElementId + "_" + i + "_dots_circles").click(function(e){

                                        
                                          
                                          let SlideToGo = ($("#" + this.id).attr("id")).split("_")[1];

                                          
                                            if(cliclLock){
                                            
                                                var prevIndex = index; 

                                                

                                                // redefine index
                                                index = SlideToGo;

                                                cliclLock = false;

                                            }
                                          
                                           let dots = true;

                                           

                                           click(SlideToGo,false,prevIndex,dots);
                                          
                                            

                                        });

                                    }


                                    $("#" + parentElementId + "-arrow-right").click(function(){
                                        
                                        let prevIndex = index;

                                         // disable arrow right
                                        $('#' + this.id).attr("disabled", true);

                                        let arrowid = this.id.split("-")[2];
                                        
                                        
                                        indexHndl(arrowid);

                                     
                                        click(index,arrowid,prevIndex);

                                    });

                                    $("#" + parentElementId + "-arrow-left").click(function(){

                                        let prevIndex = index;

                                        // disable arrow left
                                        $('#' + this.id).attr("disabled", true);

                                        let arrowid = this.id.split("-")[2];


                                        indexHndl(arrowid);

                               
                                        click(index,arrowid,prevIndex);
                            

                                });
                          

                                function click(ind,arrowid,prevIndex,dots){

                                 

                                  var initauto = auto;
                                    if(auto === true){
                                        
                                        auto = false;

                                    }
                                    
                                    
                                        

                                    clearInterval(st[parentElementId]);

                                    console.log(prevIndex,index);
                                    
                                    DotHndling(index,prevIndex);

                                    AnimateEvent(ind,arrowid,prevIndex,dots,Duration);

                                    if(initauto){
                                        auto = true;
                                    }

                                    Auto();

                                }

                                
                }
                
                ClickEvent();
               
                
             

                // Dot Event
                function DotHndling(index,prevIndex){
                    
                    
                    
                    $("#" + parentElementId + "_" +  "_dot_element").attr("disabled", true);


                    $("#" + parentElementId + "_" + (prevIndex) + "_dots_circles").css({opacity:"0.7",background:"#a9a9a9"});
                                
                

                    $("#" + parentElementId + "_" + (index) + "_dots_circles").css({opacity:"1",background:"black"});
                

                }
                


                // Animate Event
                function AnimateEvent(slideindex,arrowId,prevIndex,dots=false,dur){

                      

                        // infinite False
                        if(infinite_State !== true){

                            var anim = slidewidth * slideindex;
                            
                           
                    
                        }else{
                    
                            // infinite true
                            if(dots === true){
                                
                                
                                    if(index > prevIndex){

                                        anim = slidewidth * slideindex;
                                        
                                    }

                                    
                                    if(index < prevIndex){
                                    
                                        
                                        for(let i=0;i<(prevIndex - index);i++){

                                                $('#' + parentElementId +'-container ul li:last-child').prependTo('#' + parentElementId +'-container ul');
                                                $('#' + parentElementId +'-container ul').css('right', slidewidth);
                                        }

                                        anim = 0;
                                        

                                    }
                                

                            }else{

                               
                                    
                                    anim = slidewidth;

                                    if(arrowId  === "right"){
                                        $('#' + parentElementId +'-container ul li:last-child').prependTo('#' + parentElementId +'-container ul');
                
                                        
                                        $('#' + parentElementId +'-container ul').css('right', slidewidth);
                
                                        anim = 0;
                
                
                                    }
                                
                                

                            }    
                        }

                   
                    $('#' + parentElementId +'-container ul').animate({right:anim},dur ,function(){
              
                        

                        // enable arrows
                        $('#' + parentElementId +  "-arrow-"  + arrowId).attr("disabled", false);
                        $('#' + parentElementId +  "-arrow-"  + arrowId).attr("disabled", false);
                          

                            // infinite true
                            if(infinite_State === true ){
                                
                                if(dots === true){
                                   
                                        if(index > prevIndex){
                                            for(let i=0;i<(index-prevIndex);i++){
                                                
                                                $('#' + parentElementId +'-container ul li:first-child').appendTo('#' + parentElementId +'-container ul');
                                                $('#' + parentElementId +'-container ul').css('right', 0);
                                            }
                                        }


                                    

                                }else{

                                
                                    
                                        if(arrowId  === "left"){
                                        
                                            $('#' + parentElementId +'-container ul li:first-child').appendTo('#' + parentElementId +'-container ul');
                                            

                                        }
                                        $('#' + parentElementId +'-container ul').css('right', 0);
                                    

                                    
                                }

                                
                                    
                            }
                            
                                
                            cliclLock = true;

                            

                    });

                    

                }



            // Auto event    
            function Auto(){
                
                if(auto === true && infinite_State === true){
                    st[parentElementId] =   setInterval(() => {

                        console.log("start");

                        AnimateEvent(parentElementId,autoDirection,auto,false,autoDuration);

                        let prevIndex = index; 

                        indexHndl(autoDirection);

                        DotHndling(index,prevIndex);

                        
                        
                          },autoDelay + autoDuration);
                }
                         
                
            }
          
            if(auto === true && infinite_State === true){

                Auto();
            }


                  
    // Resize Event
    window.addEventListener("resize",function(e){
       
        var slideWidth = area[0];       
        var slideHeight =  $('#' + parentElementId +'-container').height();

        if(area === "full"){

           
                slideWidth = $('#' + parentElementId).width();

                $('#' + parentElementId + '-container').css("width",$('#' + parentElementId).width());

        }
        
        // in ZoomIn State
        else if(slideWidth > $('#' + parentElementId).width()){

         
                slideWidth = $('#' + parentElementId).width();
                $('#' + parentElementId + '-container').css("width",$('#' + parentElementId).width());

        }else{
             
                // in ZoomOut State
                slideWidth = area[0];
                $('#' + parentElementId + '-container').css("width",area[0]);

            }

    

        // Check Infinite State


        $('#' + parentElementId + '-container ul').css({ width: sliderUlWidth  , right: 0 });
    

        

        $('#' + parentElementId + '-container ul li').css({ width: slideWidth/ slideToshow, height: slideHeight });

        $('#' + parentElementId + '-container ul li img').css({ width: slideWidth / slideToshow, height: slideHeight });
            
    });
          

}

