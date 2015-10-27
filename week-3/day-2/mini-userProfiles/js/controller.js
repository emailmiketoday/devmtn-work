angular.module('userProfiles').controller('mainController', function($scope, mainService){
	
	$scope.getUsers = function(){
		$scope.users = mainService.getData();
	}
	
	$scope.getUsers();
	
});