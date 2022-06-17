
/* Event handling function*/
export function eventHndl(p,SlideWidth){

    //inital vars
    this.ParentElementId = p['id'];
    this.SlideWidth = SlideWidth;
    this.SlideToshow = p['slideToshow'];
    this.slideCount =  $('#' + this.ParentElementId +'-container ul li').length;
    this.sliderUlWidth = this.slideCount * (this.SlideWidth / this.SlideToshow);
    this.infinite_State = p['infinite'];
    this.auto = p['auto'];
    this.Duration = p['duration'];
    this.AutoDirection = p['autoDirection'];
    this.AutoDelay = p['autoDelay'];
    this.AutoDuration = p['autoDuration'];
    this.picslen = p["pics"].length;
    this.area = p['area'];
    this.direction = p['direction'];
    
    this.index = 0;

    this.CliclLock = true;

    this.state = {};
    this.state[this.ParentElementId] = this.ParentElementId;

};

eventHndl.prototype.Index = function(dir){

    var _self = this; 

    if(dir ==="right"){

        if(_self.infinite_State){

            if(_self.index <= 0){

                _self.index = _self.picslen-1;

            }else{

                _self.index--;

            }

        }else{
            
            if(_self.index > 0){

                _self.index--;
            
            }
        }

    }else{

        if(_self.infinite_State){
                                
            if(_self.index >= (_self.picslen-1)){

                _self.index = 0;

            }else{

                _self.index++;

            }

        }else{
            
            if(_self.index < (_self.picslen-1)){

                _self.index++;

            }
        }
    }
}

eventHndl.prototype.ClickDots = function(){

    var _self = this;
    
    for(let i=0; i < _self.picslen; i++){

        $("#" + _self.ParentElementId + "_" + i + "_dots_circles").click(function(e){

            let SlideToGo = ($("#" + this.id).attr("id")).split("_")[1];

            if(_self.CliclLock){

                var PrevIndex = _self.index; 

                // redefine index
                _self.index = SlideToGo;

                _self.CliclLock = false;

            }
          
            let DotsState = true;

            _self.ClickHndl(SlideToGo,PrevIndex,false,DotsState);
          
        });
    }
}


eventHndl.prototype.DotsHndling = function(Index,PrevIndex){

    var _self = this;

    $("#" + _self.ParentElementId + "_" + (PrevIndex) + "_dots_circles").css({opacity:"0.7",background:"#a9a9a9"});      

    $("#" + _self.ParentElementId + "_" + (Index) + "_dots_circles").css({opacity:"1",background:"black"});


}


eventHndl.prototype.ClickArrow = function(){

    var _self = this;

    $("#" + _self.ParentElementId + "-arrow-right").click(function(){
                                        
        let prevIndex = _self.index;

         // disable arrow right
        $('#' + this.id).attr("disabled", true);

        let arrowid = this.id.split("-")[2];
        
        _self.Index(arrowid);

        _self.ClickHndl(_self.index,prevIndex,arrowid);

    });

    $("#" + _self.ParentElementId + "-arrow-left").click(function(){

        let prevIndex = _self.index;

        // disable arrow left
        $('#' + this.id).attr("disabled", true);

        let arrowid = this.id.split("-")[2];

        _self.Index(arrowid);

        _self.ClickHndl(_self.index,prevIndex,arrowid);

    });
}


eventHndl.prototype.ClickHndl = function(Index,PrevIndex,arrow,DotsState){

    var _self = this;

    var initauto = _self.auto;

    if(_self.auto === true){
                                    
        _self.auto = false;

    }   
    
    _self.Stop(_self.state[_self.ParentElementId]);

    _self.DotsHndling(_self.index,PrevIndex);

    _self.Animate(Index,arrow,PrevIndex,DotsState,_self.Duration);

    if(initauto){

        _self.auto = true;

    }

    _self.Auto();

}


eventHndl.prototype.Animate = function(slideindex,arrowId,prevIndex,dots=false,dur){


    var _self = this;

    // infinite False
    if(_self.infinite_State !== true){

            var anim = _self.SlideWidth * slideindex;
                            
    }else{
                    
        // infinite true
        if(dots === true){
                                
            if(_self.index > prevIndex){

                    anim = _self.SlideWidth * slideindex;
                                        
            }

            if(_self.index < prevIndex){
                                    
                    for(let i=0;i<(prevIndex - _self.index);i++){

                                $('#' + _self.ParentElementId +'-container ul li:last-child').prependTo('#' + _self.ParentElementId +'-container ul');
                                $('#' + _self.ParentElementId +'-container ul').css('right', _self.SlideWidth);
                                        
                    }

                    anim = 0;
                                        
            }

        }else{

                    anim = _self.SlideWidth;

                    if(arrowId  === "right"){
                                       
                            $('#' + _self.ParentElementId +'-container ul li:last-child').prependTo('#' + _self.ParentElementId +'-container ul');
                                        
                            $('#' + _self.ParentElementId +'-container ul').css('right', _self.SlideWidth);
                
                            anim = 0;
                
                    }

        }    
    }

                        
    $('#' + _self.ParentElementId +'-container ul').animate({right:anim},dur ,function(){
              
                    
            // enable arrows
            $('#' + _self.ParentElementId +  "-arrow-"  + arrowId).attr("disabled", false);
            $('#' + _self.ParentElementId +  "-arrow-"  + arrowId).attr("disabled", false);
                          
            // infinite true
            if(_self.infinite_State === true ){
                                
                    if(dots === true){
                                   
                            if(_self.index > prevIndex){

                                    for(let i=0;i<(_self.index-prevIndex);i++){
                                                
                                            $('#' + _self.ParentElementId +'-container ul li:first-child').appendTo('#' + _self.ParentElementId +'-container ul');
                                            $('#' + _self.ParentElementId +'-container ul').css('right', 0);
                                    }
                            }

                    }else{

                                if(arrowId  === "left"){
                                        
                                    $('#' + _self.ParentElementId +'-container ul li:first-child').appendTo('#' + _self.ParentElementId +'-container ul');

                                }

                                $('#' + _self.ParentElementId +'-container ul').css('right', 0);
                                    
                    }
                                    
            }
                            
         _self.CliclLock = true;

    });


}


eventHndl.prototype.Auto = function(){

    var _self = this;

    if(_self.auto === true && _self.infinite_State === true){

        _self.state[_self.ParentElementId] = setInterval(() => {

            _self.Animate(_self.parentElementId,_self.AutoDirection,_self.auto,false,_self.AutoDuration);

            let prevIndex = _self.index; 

            _self.Index(_self.AutoDirection);

            _self.DotsHndling(_self.index,prevIndex);

        },_self.AutoDelay + _self.AutoDuration);
    }
}


eventHndl.prototype.Resize = function(){

    var _self = this;

    // Resize Event
    window.addEventListener("resize",function(e){
       
        var slideWidth = _self.area[0];       
        var slideHeight =  $('#' + _self.parentElementId +'-container').height();

        if(_self.area === "full"){

           
                slideWidth = $('#' + _self.parentElementId).width();

                $('#' + _self.parentElementId + '-container').css("width",$('#' + _self.parentElementId).width());

        }
        
        // in ZoomIn State
        else if(slideWidth > $('#' + _self.parentElementId).width()){

         
                slideWidth = $('#' + _self.parentElementId).width();
                $('#' + _self.parentElementId + '-container').css("width",$('#' + _self.parentElementId).width());

        }else{
             
                // in ZoomOut State
                slideWidth = _self.area[0];
                $('#' + _self.parentElementId + '-container').css("width",_self.area[0]);

            }

        $('#' + _self.parentElementId + '-container ul').css({ width: _self.sliderUlWidth  , right: 0 });
    
        $('#' + _self.parentElementId + '-container ul li').css({ width: slideWidth/ _self.slideToshow, height: slideHeight });

        $('#' + _self.parentElementId + '-container ul li img').css({ width: slideWidth / _self.slideToshow, height: slideHeight });
            
    }); 

}


eventHndl.prototype.Stop = function(state){

    var _self = this;

    clearInterval(state);

}


eventHndl.prototype.Hndl = function(){

    var _self = this;

    _self.ClickArrow();
    _self.ClickDots();
    _self.Resize();

    if(_self.auto === true && _self.infinite_State === true){
 
        _self.Auto();
    }
}