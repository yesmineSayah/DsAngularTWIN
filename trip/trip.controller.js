function TripControllerFN($scope,TripService){
    $scope.cities=TripService.getAllCities();
    $scope.search=function(){
        if($scope.from!=null && $scope.to!=null){
            var trip=TripService.findTrip($scope.from,$scope.to);
            if(trip!=null){
                $scope.time=trip.time;
                $scope.distance=trip.distance;
            }
        }
    }
    $scope.updateTrip=function(){
        var trip={
            from:$scope.from,
            to:$scope.to,
            distance:$scope.distance,
            time:$scope.time
        }
        TripService.update(trip);
    }
    $scope.addTrip=function(){
        var trip={
            from:$scope.from,
            to:$scope.to,
            distance:$scope.distance,
            time:$scope.time
        }
        TripService.add(trip);
    }
    $scope.addCity=function(){
        $scope.cities.push($scope.city);
    }
}
TripControllerFN.$inject=['$scope','TripService'];

angular
    .module('dsApp')
    .controller('TripController',TripControllerFN);