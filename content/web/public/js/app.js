'use strict';

// Declare app level module which depends on filters, and services
angular.module('contactApp', ['contactApp.controllers', 'ngCookies', 'ngRoute']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
   $routeProvider.when('/', {
        templateUrl: 'list', 
        controller: 'contactListCtrl'
      });
      $routeProvider.when('/contact/:id', {
        templateUrl: 'edit',
        controller: 'contactEditCtrl',
        });
        
      $routeProvider.when('/add/', {
        templateUrl: 'edit', 
        controller: 'contactEditCtrl'
      });
      
      $routeProvider.when('/edit/:id', {
        templateUrl: 'edit', 
        controller: 'contactEditCtrl'
      });
      
      $routeProvider.otherwise({redirectTo: '/'});
}]);
