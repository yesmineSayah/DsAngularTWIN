function TripServiceFN($filter){
    this.getAll = function(){
        return JSON.parse(localStorage.trips);
    }
    this.add = function(newTrip){
        var trips = this.getAll();
        if(this.findTrip(newTrip.from,newTrip.to)==null)
        {
        trips.push(newTrip);
        localStorage.trips = JSON.stringify(trips);
        }
    }
    this.update = function(newTrip){
        var trips = this.getAll();
        for(i=0; i<trips.length;i++)
            {
                var trip=trips[i];
                if((trip.from==newTrip.from && trip.to==newTrip.to)||(trip.to==newTrip.from && trip.from==newTrip.to)){
                    trips[i]= newTrip;
                    break;
                }
            }
        localStorage.trips = JSON.stringify(trips);
    }
    this.findTrip = function(from,to){
        var trips=this.getAll();
        var result= $filter('filter')(trips,{from:from,to:to});
        if(result.length > 0)
            return result[0];
        result= $filter('filter')(trips,{to:from,from:to});
        if(result.length>0)
            return result[0];
        return null;
    }
    this.getAllCities = function(){
        var trips = this.getAll();
        var cities = [];
        for(i=0;i<trips.length;i++)
            {
                var city=trips[i].from;
                if(cities.indexOf(city)==-1)
                    {
                        cities.push(city);
                    }
                
                 city=trips[i].to;
                if(cities.indexOf(city)==-1)
                    {
                        cities.push(city);
                    }
            }
        return cities;
        
    }
    
}
TripServiceFN.$inject=['$filter'];

function runFN(){
        try{
            JSON.parse(localStorage.trips);
        }catch(e){
            localStorage.trips=JSON.stringify([
                {from:"Tunis",to:"Nabeul",distance:72,time:69},
                {from:"Tunis",to:"Djerba",distance:577,time:422},
                {from:"Tunis",to:"Sousse",distance:146,time:95},
                {from:"Nabeul",to:"Djerba",distance:538,time:407},
                {from:"Nabeul",to:"Sousse",distance:108,time:80},
                {from:"Djerba",to:"Sousse",distance:444,time:350}
            ]);
        }
    }
angular
    .module("dsApp")
    .service("TripService",TripServiceFN)
    .run(runFN);