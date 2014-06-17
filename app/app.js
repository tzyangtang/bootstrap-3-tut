/// <reference path="../Scripts/angular-1.1.4.js" />

/*#######################################################################
  
  Dan Wahlin
  http://twitter.com/DanWahlin
  http://weblogs.asp.net/dwahlin
  http://pluralsight.com/training/Authors/Details/dan-wahlin

  Normally like to break AngularJS apps into the following folder structure
  at a minimum:

  /app
      /controllers      
      /directives
      /services
      /partials
      /views

  #######################################################################*/

var app = angular.module('mainApp', ['ngRoute','app.filters.translate']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'SingleController',
                templateUrl: '/app/partials/main.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/article',
            {
                controller: 'SingleController',
                templateUrl: '/app/partials/article.html'
            })
        .when('/info',
            {
                controller: 'SingleController',
                templateUrl: '/app/partials/info.html'
            })
        .otherwise({ redirectTo: '/' });
});




