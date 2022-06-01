

/*  css styles   */

export function styleCss (){};

// main styles
styleCss.prototype.Css = function(e,optional){

    // main variables 
    var parentElementId = e['id'];
    var parentElement = document.getElementById(parentElementId);
    var area = e['area'];
    var container = document.getElementById(parentElementId + "-container");
    var slideToshow = e['slideToshow'];
    var infinite = e['infinite'];
    var direction = e['direction'];


    /* check for full or custom dimensions of container */
	if (parentElement.clientHeight === 24){
        
        container.style.width = window.innerWidth + "px";
        container.style.height = window.innerHeight + "px";

       }else{
        
        if(area === "full"){
            
            container.style.width = "100%";
            container.style.height = "100%";
        }
        else{
          
            if(area[0] > parentElement.clientWidth || area[1] > parentElement.clientHeight ){
                container.style.width = "100%";
                container.style.height = "100%";
            }
            else{
            container.style.width = area[0] + "px";
            container.style.height = area[1] + "px";

            }
        }

       }


       var slideCount = $('#' + parentElementId + '-container ul li').length;
       var slideWidth = $('#' + parentElementId +'-container').width() ;       
       var slideHeight = $('#' + parentElementId + '-container').height();
           
   
       var sliderUlWidth = slideCount * (slideWidth / slideToshow);
   
       if(direction === "right"){

        var r = (slideCount-1) * (slideWidth / slideToshow);
       }else{
           r = 0;
       }
   
           // ul align position
           $('#' + parentElementId +'-container ul').css({ width: sliderUlWidth  , float:"left", right:r});
        
   
               $('#' + parentElementId +'-container li').css({ width: slideWidth/ slideToshow, height: slideHeight });
   
               $('#' + parentElementId +'-container li img').css({ width: slideWidth / slideToshow, height: slideHeight });
           



    // check optional css styles
    if(optional !== null){
        let optionalCss = optional['css'];

        if(optional['css'] !== null && optional['css'] !== "" && optional['css'] !== undefined){

            for(let x=0;x<Object.keys(optionalCss).length;x++){

                
                $("#" + parentElementId + "-" + Object.keys(optionalCss)[x]).css(optionalCss[Object.keys(optionalCss)[x]]);
                
            
                }

        }
    }

}


// arrows styles modes
styleCss.prototype.Arrows = function(e,optional){

    var parentElementId = e['id'];
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

