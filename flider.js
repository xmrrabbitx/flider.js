import {error} from "./modules/error_handling/errhndl.js"
import {styleCss} from "./style/js/style.js"
import {eventHndl} from "./modules/event_handling/event_hndl.js"
import { dots } from "./modules/dots_handling/dots.js";


/* Main Variables */
export function variables(e){

    this.var = {id:e['id'] ?? null, area:e['area'] ?? null, pics:e['pics'] ?? null, src_pics:e['src_pics'] ?? null,
                direction:e['direction'] ?? null, duration:e['duration'] ?? null,infinite:e['infinite'] ?? true ,slideToshow:e['slideToshow'] ?? 1,
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
variables.prototype.create = function(){

    /* main variable */
	var parentElementId = this.var['id'];
	var parentElement = document.getElementById(parentElementId);
    var area = this.var['area'];
    var Pics = this.var['pics'];
    var SrcPics = this.var['src_pics'];
    var slideToshow = this.var['slideToshow'];
    var infinite =  this.var['infinite'];
    var direction = this.var['direction'];

    /* create container element */
	this.containerBlock = document.createElement("div");
	this.containerBlock.setAttribute("name", parentElementId + "-container");
	this.containerBlock.setAttribute("id", parentElementId + "-container"); 
    this.containerBlock.setAttribute("class", "flider_container"); 
	this.containerBlock.style.display = "";
	parentElement.appendChild(this.containerBlock);
   
    // cretae ul slider element 
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

    for( var i = 0; i < Pics.length; i++){

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
       
    
    // style object create
    if(this.var['optional'] !== null){

            var styleObject = new styleCss();
            styleObject.Css(this.var,this.var['optional']);
            styleObject.Arrows(this.var,this.var['optional']);
             
    }


    // dots object create
    if(this.var['dots'] !== null){
                   
            var dotObject = new dots();
            dotObject.create(this.var);
                    
    }
}


/* Slide Trail Handle: all variable pass through this method */
variables.prototype.handler = function(){

    var slideWidth = $('#' + this.var['id'] + '-container').width() ; 
       
    let eHndler = new eventHndl(this.var,slideWidth);
    eHndler.Hndl();
    

}


export function fliderjs(e){

    let Slider = new variables(e);
    Slider.create();
    Slider.handler();

}

