
/* Error Handling Class */
function errHdl(){};

/* Error Handling Empty Method */
 errHdl.prototype.empty = function(e){

    var parentElementId = e['id'];

    for(let x=0;x<Object.keys(e).length;x++){
        
        if(e[Object.keys(e)[x]] === "" || e[Object.keys(e)[x]] === undefined){

            return true;

        }
    }

};

/* Error Handling Freez Method */
errHdl.prototype.freez = function(e){
   
    let parentElementId = e['id'];
    
    $('#' + parentElementId ).css("opacity","0.3");
    
    $('#' + parentElementId ).click(function(){
    
        $('#' + parentElementId + '-arrow-left').prop("disabled", true);
        $('#' + parentElementId + '-arrow-right').prop("disabled", true);
        
        error.empty(e);

    });
   
}

/* create Object of error handling */
export var error = new errHdl();
