angular.module("directivePractice")

.service("weatherService", function($http, $q) {
	
	this.getWeather = function (city) {
		var deferred = $q.defer();
		$http.get('API URL')
	}
	
});