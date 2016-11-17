function milesFN(){
    return function(input){
        if(input!=null)
        return (input*0.62)+" miles";
    }
}
angular
    .module('dsApp')
    .filter('miles',milesFN);