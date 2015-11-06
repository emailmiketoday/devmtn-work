angular.module("miniRouting", ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
	
	//Don't forget to put all property values in quotation marks!
	$stateProvider
		.state("home", {
			url: "/",
			controller: "homeCtrl",
			templateUrl: "js/home/homeTmpl.html"
		})
		.state("products", {
			url: "/products/:id",
			controller: "productsCtrl",
			templateUrl: "js/products/productsTmpl.html"
		})
		.state("settings", {
			url: "/settings",
			controller: "settingsCtrl",
			templateUrl: "js/settings/settingsTmpl.html"
		})
		
		//$urlRouterProvider will be used here using the Otherwise command.
	$urlRouterProvider
		.otherwise("/");
		
		//within the .config function, the routes we have set up are kind of like CSS selectors!
		//So just as you would select. .menu { etc etc to begin adjust the menu class, with routing
		//using states, you use .state("STATE NAME", { STATE PROP: "STATE VALUE"})
	
});