
/* Classes  */


/* Error Handling Class */
function errHdl(){};

/* Error Handling Empty Method */
errHdl.prototype.empty = function(e){
       
    for(x=0;x<Object.keys(e).length;x++){
        
        if(e[Object.keys(e)[x]] === "" || e[Object.keys(e)[x]] === undefined){


            var notification = new Notification(Object.keys(e)[x] + " is emptyyyy ");

            return true;

        }
    }

};

/* Error Handling Freez Method */
errHdl.prototype.Freez = function(e){
   

    $("#slider").css("opacity","0.3");
    
    $("#slider").click(function(){
    
        $("#arrow-left").prop("disabled", true);
        $("#arrow-right").prop("disabled", true);
        
        err.empty(e);

    });
   


}

/* create Object of error handling */
var err = new errHdl();




/* Event handling function*/
function eventHndl(){};

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
                                        Auto();
                                }
                                
                                

                };
                
                ClickEvent();
               
                
                

                // Auto Event
                



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
               
                    st[parentElementId] =   setInterval(() => {
                 
                        AnimateEvent(parentElementId,autoDirection,auto,false,Duration);

                          },5000);
                         
                
            }
          
            if(auto === true && mode === true){

                Auto();
            }
          






}



/*  css styles   */

function styleCss (){};

// main styles
styleCss.prototype.Css = function(optional,parentElementId){

    if(optional !== null){
        let optionalCss = optional['css'];

        if(optional['css'] !== null && optional['css'] !== "" && optional['css'] !== undefined){

            for(x=0;x<Object.keys(optionalCss).length;x++){

                
                $("#" + parentElementId + "-" + Object.keys(optionalCss)[x]).css(optionalCss[Object.keys(optionalCss)[x]]);
                
            
                }

        }
    }

}


// arrows styles modes
styleCss.prototype.Arrows = function(optional,id){

    var parentElementId = id;
    if(optional !== null){
        
            if(optional['arrows'] === false){
                $('#' + parentElementId +  '-arrow-right').css("display","none");
                $('#' + parentElementId + '-arrow-left').css("display","none");

            } else if (optional['arrows']  === "hover"){

                $('#' + parentElementId +  '-arrow-right').css("display","none");
                $('#' + parentElementId + '-arrow-left').css("display","none");

                $('#' + parentElementId +'-container').on("mouseover",fadeIn).on("mouseenter",fadeIn).on("click",fadeIn).on("mouseleave", fadeOut);
                


            } else if (optional['arrows']  === "pale"){

                $('#' + parentElementId +  '-arrow-right').css("opacity",0.5);
                $('#' + parentElementId + '-arrow-left').css("opacity",0.5);
                $('#' + parentElementId +'-container').on("mouseover",paleOn).on("mouseenter",paleOn).on("click",paleOn).on("mouseleave", paleOff);

            }

            function fadeIn(){
                $('#' + parentElementId +  '-arrow-right').fadeIn(500)
                $('#' + parentElementId + '-arrow-left').fadeIn(500)

            }
        function fadeOut(){
            $('#' + parentElementId +  '-arrow-right').fadeOut(500)
            $('#' + parentElementId + '-arrow-left').fadeOut(500)
        }
        function paleOn(){

            $('#' + parentElementId +  '-arrow-right').css("opacity",1);
            $('#' + parentElementId + '-arrow-left').css("opacity",1);

        }
        function paleOff(){

            $('#' + parentElementId +  '-arrow-right').css("opacity",0.5);
            $('#' + parentElementId + '-arrow-left').css("opacity",0.5);

        }

    }


}




/* Main Variables */
function variables(e){

    this.var = { container:{ id:e['id'] ?? null,area:e['area'] ?? null },pics:e['pics'] ?? null, src_pics:e['src_pics'] ?? null,
                duration:e['duration'] ?? null,infinite:e['infinite'] ?? true ,slideToshow:e['slideToshow'] ?? 1,
                auto:e['auto'] ?? null,autoDelay:e['auto_delay'] ?? null,autoDuration:e['auto_duration'] ?? null,
                autoDirection:e['auto_direction'] ?? "right",
                optional:e['optional'] ?? null


        };

        // Check Empty Options
        if(err.empty(this.var)){

            err.Freez(this.var);

        }
        
      
}



/* create container for slider */
variables.prototype.containerCreate = function(){


    /* main variable for container */
	var parentElementId = this.var['container']['id'];
	var parentElement = document.getElementById(parentElementId);

    var area = this.var['container']['area'];

    /* create element */
	this.containerBlock = document.createElement("div");
	this.containerBlock.setAttribute("name", parentElementId + "-container");
	this.containerBlock.setAttribute("id", parentElementId + "-container"); 
    this.containerBlock.setAttribute("class", "flider_container"); 
	this.containerBlock.style.display = "";
	parentElement.appendChild(this.containerBlock);


    

        /* check for full or custom dimensions */
	if (parentElement.clientHeight === 24){
        
        this.containerBlock.style.width = window.innerWidth + "px";
        this.containerBlock.style.height = window.innerHeight + "px";

       }else{
        
        if(area === "full"){
            
            this.containerBlock.style.width = "100%";
            this.containerBlock.style.height = "100%";
        }
        else{
          
            if(area[0] > parentElement.clientWidth || area[1] > parentElement.clientHeight ){
                this.containerBlock.style.width = "100%";
                this.containerBlock.style.height = "100%";
            }
            else{
            this.containerBlock.style.width = area[0] + "px";
            this.containerBlock.style.height = area[1] + "px";

            }
        }

       }

}



/* Create Slide Trails */
variables.prototype.slideTrailsCreate =  function(){

    var parentElementId = this.var['container']['id'];
    var parentElement = document.getElementById(parentElementId);
    
    let Pics = this.var['pics'];
    let SrcPics = this.var['src_pics'];

    this.picUl = document.createElement("ul");
    this.picUl.setAttribute("id","ul_slider");

    this.contb = parentElement.children[0];

    // Create arrow left
    this.arrowleft = document.createElement("button");
    this.icarrLeft = document.createElement("span");
    this.icarrLeft.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.1em" height="1.1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"/></svg>';
    this.arrowleft.appendChild(this.icarrLeft);
    this.arrowleft.setAttribute("id", parentElementId + "-arrow-left");
    this.arrowleft.setAttribute("class","arrows-");

    // Create arrow right
    this.arrowright = document.createElement("button");
    this.icarrRight = document.createElement("span");
    this.icarrRight.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.1em" height="1.1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"/></svg>';
    this.arrowright.appendChild(this.icarrRight);
    this.arrowright.setAttribute("id",parentElementId + "-arrow-right");
    this.arrowright.setAttribute("class","arrows-");
    
    
    
    /* Create Pictures Elements */    
    for(var i=0; i < Pics.length; i++){

        this.picLi = document.createElement("li");

        this.pic = document.createElement("img");
        this.pic.setAttribute("id","slides_" + i);
        this.pic.setAttribute("src", SrcPics + "/" + Pics[i]);
        this.pic.className = "slides_pic";


        this.picLi.appendChild(this.pic);
        this.picUl.appendChild(this.picLi);

        
    }

    this.contb.appendChild(this.picUl);
    this.contb.appendChild(this.arrowleft);
    this.contb.appendChild(this.arrowright);


    $("#" + parentElementId + "-arrow-right").css("right","0");

    return true;

}




/* dimension of our trails */
variables.prototype.slideTrailsDimensions = function(){
    
    var area = this.var['container']['area'];
    let slideToshow = this.var['slideToshow'];
    let infinite =  this.var['infinite'];
    let Pics = this.var['pics'];
    var parentElementId = this.var['container']['id'];   
    var parentElement = document.getElementById(parentElementId);


    var slideCount = $('#' + parentElementId + '-container ul li').length;
    var slideWidth = $('#' + parentElementId +'-container').width() ;       
    var slideHeight = $('#' + parentElementId + '-container').height();
        

    var sliderUlWidth = slideCount * (slideWidth / slideToshow);

   

    if(infinite !== true){

       

        $('#' + parentElementId +'-container ul').css({ width: sliderUlWidth  , right:  sliderUlWidth - (slideWidth / slideToshow) });
        

    }else{


        $('#' + parentElementId +'-container ul').css({ width: sliderUlWidth  , left: -  (slideWidth / slideToshow)  });
        
    }


            $('#' + parentElementId +'-container li').css({ width: slideWidth/ slideToshow, height: slideHeight });

            $('#' + parentElementId +'-container li img').css({ width: slideWidth / slideToshow, height: slideHeight });
        
        
    // Resize Event
    window.addEventListener("resize",function(e){
       
            var slideWidth = area[0];       
            var slideHeight =  $('#' + parentElementId +'-container').height();
    
            if(area === "full"){

                    slidewidth = $('#' + parentElementId).width();

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
            if(infinite !== true){

                $('#' + parentElementId + '-container ul').css({ width: sliderUlWidth  , right:  sliderUlWidth - (slideWidth / slideToshow) });
        

            }else{

                $('#' + parentElementId + '-container ul').css({ width: sliderUlWidth  , left: -  (slideWidth / slideToshow)  });
        
            }

            $('#' + parentElementId + '-container ul li').css({ width: slideWidth/ slideToshow, height: slideHeight });

            $('#' + parentElementId + '-container ul li img').css({ width: slideWidth / slideToshow, height: slideHeight });
                
        });

                 $('#' + parentElementId + '-container ul li:last-child').prependTo('#' + parentElementId + '-container ul');


}




/* Slide Trail Handle: all variable pass through this method */
variables.prototype.slideTrailsHndl = function(){


       var styleObject = new styleCss();
       styleObject.Css(this.var['optional'],this.var['container']['id']);
       styleObject.Arrows(this.var['optional'],this.var['container']['id']);
       var parentElementId = this.var['container']['id'];
       var slideWidth = $('#' + parentElementId + '-container').width() ; 
        
       
        let eHndler = new eventHndl();
        eHndler.Handler({
           
            id:this.var['container']['id'],
            auto: this.var["auto"],
            autoDelay: this.var["autoDelay"],
            autoDuration: this.var["autoDuration"],
            autoDirection:this.var['autoDirection'],
            duration:this.var['duration'],
            mode:this.var['infinite'],
            slideToshow:this.var['slideToshow'],
            slidewidth:slideWidth,
            pics:this.var['pics']

                        });
}


function fliderjs(e){

    let Slider = new variables(e);
    Slider.containerCreate();
    Slider.slideTrailsCreate();
    Slider.slideTrailsDimensions();
    Slider.slideTrailsHndl();


}

