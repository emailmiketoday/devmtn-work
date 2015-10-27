angular.module('foodApp')
	.controller('mainCtrl', function($scope, foodService, questionsService){
	
	$scope.foods = foodService.listOfFoods;
	
	$scope.questions = questionsService.questions;
	
	$scope.selected = function(selectedQuestion){
		var question = JSON.parse(JSON.stringify(selectedQuestion));
		delete question.prompt;
		delete question.$$hashKey;
		$scope.foodFilter = question;
	}
	
});