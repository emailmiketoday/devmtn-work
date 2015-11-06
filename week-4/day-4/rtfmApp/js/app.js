angular.module("rtfmApp", ["firebase", "ui.router"])

.constant("fb", {
	url: "https://rtfm-app-mike.firebaseio.com/"
})
	
.config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
		.state("threads", {
			url: "/threads",
			urlTemplate: "js/threads/threads.html",
			controller: "threadsController",
			resolve: {
				threadsRef: function(threadService) {
					return threadService.getThreads();
				}
			}
		})
		
	$stateProvider
		.state("thread", {
			url: "/threads/:threadId",
			urlTemplate: "js/thread/thread.html",
			controller: "threadController",
			resolve: {
				threadRef: function(threadService, $stateParams) {
					return threadService.getThread($stateParams.threadId);
				}
			},
			commentsRef: function(threadService, $stateParams) {
				return threadService.getComments($stateParams.threadId);
			}
		})
		

	$urlRouterProvider.otherwise("/threads")
	
var firebaseRef = new Firebase("https://rtfm-app-mike.firebaseio.com/");
	
	
});