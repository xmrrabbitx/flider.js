

/*  css styles   */

export function styleCss (){};

// main styles
styleCss.prototype.Css = function(optional,parentElementId){

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

