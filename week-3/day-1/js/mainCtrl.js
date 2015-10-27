// This means getting, without the brackets you are 
// making a new one.

var app = angular.module('friendsList');

// The first thing you give anything in angular is the
// name or the key.

app.controller('mainCtrl', function($scope) {
	
	$scope.name = "Michael"
	
	$scope.friends = [
		'Eldon',
		'Alberto',
		'Josh',
		'Jon'
	]
	

	
	
	
	
	
	
	
	
	
	
	
	
});