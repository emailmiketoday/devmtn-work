var app = angular.module('app', []);

app.controller('AppController', function ($scope){
	
	$scope.monsters = [
		{name: 'joe'},
		{name: 'bob'},
		{name: 'sal'}
	];
	
    $scope.search = function () {
        var result = [];
		$scope.monsters.forEach(function (element) {
			if (element.name.toLowerCase() === $scope.query.toLowerCase()) {
				result.push(element);
			}
		});
    };
	
});