
configFN.$inject=['$routeProvider'];

function configFN($routeProvider)
{
    $routeProvider.when("/trip",{
        controller:"TripController",
        templateUrl:"trip/trip.view.html"
    }) 
        .when("/simulation",{
                controller:"simulationController",
                templateUrl:"simulation/simulation.view.html"
           
    }).otherwise({redirectTo:"/trip"});
}

angular.module("dsApp",['ngRoute']).config(configFN);

