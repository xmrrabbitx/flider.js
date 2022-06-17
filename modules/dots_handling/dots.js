export function dots(){};

dots.prototype.create = function (e){

    if(e['dots']){

        var parentElementId = e['id'];
        var parentElement = document.getElementById(parentElementId);

        var CircleDots = [];
        
        // create elements
        for(var i=0; i < e['pics'].length; i++){
          
            this.dotsElement = document.createElement("div");
            this.dotsElement.setAttribute("id" , parentElementId +  "_dot_element");

            Object.assign(this.dotsElement.style,{textAlign:"center", marginTop:"20px"});

            this.circle = document.createElement("div");
            this.circle.setAttribute("id",parentElementId + "_" + i + "_dots_circles");
            this.circle.setAttribute("class", "fliderjs_dots_circles");
           
            Object.assign(this.circle.style,{width:"10px",height:"10px","border-radius":"500px",marginRight:"10px"});

            CircleDots.push(this.circle);
            
        }

      // append process
      for(let j=0;j< CircleDots.length;j++){
       
        this.dotsElement.appendChild(CircleDots[j]);

        parentElement.appendChild(this.dotsElement);

      }

      let PicsLenght = e['pics'].length;
      $("#" + parentElementId + "_" + (PicsLenght - PicsLenght) + "_dots_circles").css({"opacity":"1","background":"black"});

    }

};

