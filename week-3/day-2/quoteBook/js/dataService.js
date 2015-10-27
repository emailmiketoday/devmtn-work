// Here we call the module we created, and are adding a SERVICE to it, which we 
// then name as DATASERVICE (although it could be anything).  We add a function as
// we do on the controller, but we DON'T ADD $SCOPE inside.

angular.module("quoteBook").service("dataService", function() {
	
	var quotes = 
	[
		{ text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
		{ text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
		{ text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
		{ text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
		{ text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
		{ text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
		{ text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
	];
	
	// This is referring to the service we created using this file called DATASERVICE!
	// .getData can actually be anything, just X for example.  We are attaching it to
	// 'THIS' ('dataService') so it can be called in other files!  To call in other files
	// we type 'dataService.getData' and it will fun the function we write for it!
	
	//START
	//1. dataService.js is where our data is!
	//2. We create "this.getData = function () {" which returns our quotes (at this point no where), but they 
	//   can be accessed in other files if we call this function!
	//3. mainCtrl.js is where we call our quotes function by assigning it to a new $scope called $scope.quotes =
	//4. This $scope.quotes is assigned to a new function called $scope.getQuotes.
	//5. the $scope.getQuotes is called in the index.html file by using ng-repeat="prop in quotes"
	
	
	
	this.getData = function(){
		return quotes;
	}
	
	this.addData = function(){
		if( quotes.hasOwnProperty('text') && quotes.hasOwnProperty('author')) {
			
		}
	}
	
	
/*	
	this.addData = function(){
		
		var dataObj = {};
		
		// Take in a data object, verify the data object has the proper keys
		// meaning just text and author, then add that object to the end of the 
		// quotes array
		
		if(this.text.hasOwnProperty() {
			//add object to end of quotes array
		}
		
	}
	
	
	this.removeData = function(){
		// takes in the text of a quote, loops through the quotes array, then
		// removes the proper quote from the array.
	}

*/	
	
});