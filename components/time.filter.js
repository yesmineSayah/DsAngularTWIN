function timeFN(){
    return function(input){
        if(input!=null)
        return Math.floor(input/60)+" h : "+(input%60)+" min";
    }
}
angular
    .module('dsApp')
    .filter('time',timeFN);