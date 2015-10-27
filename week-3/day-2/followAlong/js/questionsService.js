angular.module('foodApp')
	.service('questionService', function(){
		
		this.questions = [
			{
				prompt: "Spicy?",
				spicyRating: 5
			},
			{
				prompt: "Low calorie",
				calories: 400
			}
		]
		
});