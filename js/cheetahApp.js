var cheetahApp = angular.module('cheetahApp',['ngRoute']);


/*
routing code here:

*/

cheetahApp.config(function($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        
        templateUrl:'pages/simple.html',
        controller: 'about'
        
    }
    
)
 .when('/bee', {
        
        templateUrl:'pages/services.html',
        controller:'about'
    })
    .when('/port', {
        
        templateUrl:'pages/portfoliome.html',
        controller:'about'
        
    })
});




/**
controller code here:

*/

cheetahApp.controller('about', ['$scope','$log', function($scope,$log) {
    
    
}]);


cheetahApp.controller('services', ['$scope','$log', function($scope,$log) {
    
    
}]);


cheetahApp.controller('poerfolio', ['$scope','$log', function($scope,$log) {
    
    
}]);


cheetahApp.controller('contact', ['$scope','$log', function($scope,$log) {
    
    
}]);