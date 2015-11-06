var app = angular.module("myApp")

app.controller("myController", function($scope, myService) {
	
	
	// Here we are putting the function we made in the service on the controller, so it
	// can be seen on the view.  We could technically call it something else instead of
	// getUsers, but we are doing so to ensure we know what each $scope is doing.
	
	// The $scope.getUsers is a new function that CALLS THE SERVICE FUNCTION we created
	// in the service.js
	
	// While running the SERVICE FUNCTION we created, we are using another function, the
	// .THEN, a PROMISE to put the response data onto the scope so it can be seen on the view.
	
	// the $scope.getUsers(); is invoking the function.
	
	$scope.getUsers = function() {
		myService.getUsers().then(function(response) {
			$scope.users = response.data;
		});
	}
	
	$scope.getUsers();
	
});