angular.module("rtfmApp").controller("threadController", function($Scope, threadRef, $firebaseObject) {
	
	var thread = $firebaseObject(threadRef);
	thread.$bindTo($scope, "thread");
	
});