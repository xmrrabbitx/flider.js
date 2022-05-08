import {error} from "./modules/error_handling/errhndl.js"
import {styleCss} from "./modules/style/style.js"
import {eventHndl} from "./modules/event_handling/event_hndl.js"
import { dots } from "./modules/dots_handling/dots.js";




/* Main Variables */
export function variables(e){

    this.var = {id:e['id'] ?? null, area:e['area'] ?? null, pics:e['pics'] ?? null, src_pics:e['src_pics'] ?? null,
                duration:e['duration'] ?? null,infinite:e['infinite'] ?? true ,slideToshow:e['slideToshow'] ?? 1,
                auto:e['auto'] ?? null,autoDelay:e['auto_delay'] ?? null,autoDuration:e['auto_duration'] ?? null,
                autoDirection:e['auto_direction'] ?? "right",
                optional:e['optional'] ?? null,dots:e['dots'] ?? null


        };

  
        // Check Empty Options
        if(error.empty(this.var)){

            error.freez(this.var);

        }
        
      
}



/* create container for slider */
variables.prototype.containerCreate = function(){


    /* main variable for container */
	var parentElementId = this.var['id'];
	var parentElement = document.getElementById(parentElementId);

    var area = this.var['area'];

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

    var parentElementId = this.var['id'];
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
    
    var area = this.var['area'];
    let slideToshow = this.var['slideToshow'];
    let infinite =  this.var['infinite'];
    let Pics = this.var['pics'];
    var parentElementId = this.var['id'];   
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

    if(this.var['optional'] !== null){
       var styleObject = new styleCss();
       styleObject.Css(this.var['optional'],this.var['id']);
       styleObject.Arrows(this.var['optional'],this.var['id']);

    }
     if(this.var['dots'] !== null){
      
       var dotObject = new dots();
       dotObject.create(this.var);
    }
       var parentElementId = this.var['id'];
       var slideWidth = $('#' + parentElementId + '-container').width() ; 
        
       
        let eHndler = new eventHndl();
        eHndler.Handler({
           
            id:this.var['id'],
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



export function fliderjs(e){

    let Slider = new variables(e);
    Slider.containerCreate();
    Slider.slideTrailsCreate();
    Slider.slideTrailsDimensions();
    Slider.slideTrailsHndl();


}

