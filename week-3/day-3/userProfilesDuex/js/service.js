var app = angular.module("myApp")

app.service("myService", function($http) {
	
	var baseUrl = "http://swapi.co/api/";
	
	// Here we have made a function called getUsers that gets the data.
	// That is all the service is doing.  The Controller is then the next part.
	this.getUsers = function () {
		return $http({
			method: 'GET',
			url: baseUrl + "people/"
		});
	}
	
});
