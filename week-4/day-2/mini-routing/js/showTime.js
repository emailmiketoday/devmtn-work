angular.module("timeApp").directive('showTime', function() {
	return {
		restrict: 'E',
		template: '<div> Do you know what time it is? </br>Of course you don\'t.  </br>It is currently {{time}} </div>',
		link: function(scope, elem, attrs) {
			var currentTime = new Date();
			scope.time = currentTime.toString();
		}
	}
	
});

