var weatherApp = angular.module('weatherApp', ['ngResource']);



weatherApp.controller("locationController", ["$scope", "$resource", "$filter",function($scope, $resource, $filter) {
    $scope.locationAPI = $resource("http://ip-api.com/json", { get: {
        method: "GET"
    }});
    $scope.locationResult =  function(data) {
        $scope.city = data.city;
        $scope.country = data.country;
        $scope.lat = data.lat;
        $scope.lon = data.lon;
        $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather?");
        $scope.weatherAPI.get({lat: $scope.lat, lon: $scope.lon, appid: '2de143494c0b295cca9337e1e96b00e0'}, function(data){
            console.log(data);
            $scope.weatherInfo = data.weather[0].description;
            $scope.temperatureC = Math.round(data.main.temp - 273);
            $scope.temperature = $scope.temperatureC;
            $scope.temperatureF = Math.round(($scope.temperature*9/5) + 32);
            $scope.temperatureToggleF = function() {
                if($scope.temperature == $scope.temperatureC) {
                    $scope.temperature = $scope.temperatureF;
            }
        };
            $scope.temperatureToggleC = function() {
                if($scope.temperature == $scope.temperatureF) {
                    $scope.temperature = $scope.temperatureC;
            }
        };
            $scope.weatherIcon = "http://www.openweathermap.org/img/w/" + data.weather[0].icon + ".png"
            $scope.date = new Date (data.dt * 1000);
            $scope.dateStandard = $filter('date')($scope.date,'EEEE h:mm a');
            
            console.log($scope.icon)



        });
    };
    $scope.locationAPI.get({}, $scope.locationResult);
    
}]);

