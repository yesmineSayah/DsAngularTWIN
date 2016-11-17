(function (angular) {
    'use strict';

    function controllerFN($scope, simulationService, TripService, CarService) {
        
    $scope.travelPlan = [];
    $scope.consumption = 0;
    $scope.simulation =  {
                    "distance": 0,
                    "time": 0,
                    "price": 0
                };

        $scope.cars = CarService.getAll();

        
        $scope.cities = TripService.getAllCities();
        $scope.simulate = function () {
           $scope.simulation = simulationService.simulate($scope.travelPlan, $scope.consumption);
        }
        $scope.addToTravelPlan = function (city) {
            $scope.travelPlan.push(city);
            $scope.simulation = simulationService.simulate($scope.travelPlan, $scope.consumption);
        }
        $scope.clearTravelPlan = function () {
            $scope.travelPlan = [];
            $scope.simulation = simulationService.simulate($scope.travelPlan, $scope.consumption);
        }
        
    }


    controllerFN.$inject = ['$scope', 'simulationService', 'TripService', 'CarService'];
    angular
        .module('dsApp')
        .controller('simulationController', controllerFN);
})(angular);
