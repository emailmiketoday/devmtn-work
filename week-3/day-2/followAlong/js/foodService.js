angular.module('foodApp')
.service('foodService', function(){
	
		this.listOfFoods = [
		{
			name: 'Cheeseburgers',
			origin: 'American',
			calories: 480,
			spicyRating: 2
		},
		{
			name: 'Sushi',
			origin: 'Japanese',
			calories: 400,
			spicyRating: 3
		},
		{
			name: 'Burrito',
			origin: 'Mexican',
			calories: 850,
			spicyRating: 5
		},
		{
			name: 'Chicken Masala',
			origin: 'Italian',
			calories: 540,
			spicyRating: 4
		}
	]
		
});