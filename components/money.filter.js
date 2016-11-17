

function moneyFN(){
    return function(input){
       if(input!=null)
        return (input*0.4)+"$"+(input*0.44)+"£";
}
}
angular
    .module('dsApp')
    .filter('money',moneyFN);