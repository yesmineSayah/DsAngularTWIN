(function (angular) {
    function serviceFn(TripService) {
        this.simulate = function (travelPlan, consumption) {
            if (travelPlan.length >= 2) {
                var distance = 0;
                var time = 0;
                for (var i = 0; i < travelPlan.length - 1; i++) {
                    var trip = TripService.findTrip(travelPlan[i], travelPlan[i + 1]);
                    distance = distance + trip.distance;
                    time = time + trip.time;
                }
                var price = Math.round(((distance / 100) * consumption) * 1.650);
                return {
                    "distance": distance,
                    "time": time,
                    "price": price
                };
            } else {
                return {
                    "distance": 0,
                    "time": 0,
                    "price": 0
                };
            }
        }
    }
    serviceFn.$inject = ['TripService'];
    angular.module("dsApp").service('simulationService', serviceFn);
})(angular);
