
        function simulationControllerFn($scope, simulationService) {
            $scope.simulatefn = function () {
                simulationService.simulate($scope.travelPlan, $scope.consumption);
            }
        }
    

 simulationControllerFn.$inject=['$scope','simulationService'];
    angular
    .module('dsApp')
    .controller('simulationController',simulationControllerFn);
