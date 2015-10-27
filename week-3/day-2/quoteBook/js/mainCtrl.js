// This tells the page that we need to use an existing module, and it looks through the 
// files to find a matching file!

var app = angular.module("quoteBook");


// Here we are creating a controller called mainCtrl.  We include a function so it runs the page
// the way we want.

app.controller("mainCtrl", function($scope, dataService) {
	
	// Creating a scope object is easy, just like a variable!
	$scope.test = "WAKKA WAKKA!";
	
	
	// This is getting the quotes
	$scope.getQuotes = function(){
		$scope.quotes = dataService.getData();
	}
	
	$scope.getQuotes();
	
});

