var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {
  $scope.getUsers = function() {
    mainService.getUsers(currentPage)
    .then(function(response) {
        $scope.users = response.data.data;
        maxPages = response.data.total_pages;
    });
  }
  $scope.getUsers();
  
  var currentPage = 1;
  var maxPages = 1;
  
  $scope.next = function() {
    if(currentPage < maxPages) {
          currentPage++;
          $scope.getUsers();
    }

  }
  
  $scope.previous = function() {
    if(currentPage > maxPages) {
       currentPage--;
       $scope.getUsers();
    }

  }
  
  
  
});