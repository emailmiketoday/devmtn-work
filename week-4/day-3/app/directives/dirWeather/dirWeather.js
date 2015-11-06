angular.module('directivePractice', [])

.directive('dirWeather', function() {
	return {
		templateUrl: 'app/directives/dirWeather/dirWeather.html',
		scope: {
			currentUser: "=",
			weatherCall: "&"
		},
		controller: {
			
		}
	}
})