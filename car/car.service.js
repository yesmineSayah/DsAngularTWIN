(function (angular){
    function carServiceFn(){
        this.getAll()= function(){
            return JSON.parse(localStorage.cars);
        }
    }
    function runFN() {
     try {
         JSON.parse(localStorage.cars);
     }
     catch (e) {
         localStorage.cars = JSON.stringify([
             {matricule: "124 TU 1248", name: "Polo 6", consumption: 7},
             {matricule: "115 TU 1029", name: "Ford Fiesta",consumption: 8},
             {matricule: "134 TU 1878", name: "Passat", consumption: 9}
         ]);
     }
 }
angular
    .module("dsApp")
    .service("CarService",carServiceFn)
    .run(runFN);
})(angular);