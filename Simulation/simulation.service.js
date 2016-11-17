(function (angular) {
    function serviceFn(TripService) {
        this.simulate = function (travelPlan, consumption) {
            var distance = 0;
            var time = 0;
            
            for (var i = 0; i < travelPlan.length - 1; i++) {
                var trip = TripService.findTrip(travelPlan[i], travelPlan[i + 1]);
                distance = distance + trip.distance;
                time = time + trip.time;
            }
            var price=Math.round(((distance/100)*consumption)*1.650);
            return {
                "distance" :distance,
                "time":time,
                "price":price
            };
        }
    }
    serviceFn.$inject = ['TripService'];
    angular.module("dsApp").service('simulationService', serviceFn);
})(angular);