var app = angular.module('craproom');

app.service('parseService', function($http){
  //Here you'll need to create two methods. One called postData and the other called getData.
  
  //On the lines below create a getData method. This method will retrieve data from the parse backend.
  //The url for the get request should be 'https://api.parse.com/1/classes/chat?order=-createdAt'
  //Be sure to return whatever gets returned from $http so you can call .then in your controller.
  
  
  //getData method here
  this.getData = function() {
    // Using the 'THIS' command, we are referring to the service we created, titled 'parseService'.
    // We have made a function called getData which will use the METHOD GET to grab data from the api!

    return $http({
      method: 'GET',
      url: "https://api.parse.com/1/classes/chat?order=-createdAt"
    }).then(function(res){
      return res.data.results
    })
  }
  
  //On the line below create the postData method. This method will add data to the parse backend.
  //The url for the request needs to be 'https://api.parse.com/1/classes/chat'  
  
  // Because we're making a POST request, we need a way to tell parse the data we want to give it, 
  // in your $http call (along with url and method) have a data property which has a value that is 
  // equal to another object which a key of text and a value of the message being passed to parse. IE data: {text: yourMessage} 
  // Also, remember that $http returns a promise. So if you return the whole $http call (return $http(...)), 
  // you can then use .then in your controller.
  

  //postData method here
  this.postData = function(message){
    // Using the 'THIS' command, we are referring to the service we created, titled 'parseService'.
    // It is a function which we pass through a parameter named message.
    
    // We also need do an $http request to add a message to our parse backend.
    return $http({
      method: 'POST',
      url: 'https://api.parse.com/1/classes/chat',
      params: { sort: 'ascending' },
      data: { text: message }
    })
  };

 

  
  
  

});









