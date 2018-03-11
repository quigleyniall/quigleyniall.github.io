var myApp1=angular.module("myApp",['ngRoute']);

myApp1.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.html',
            controller: 'maincontroller'
        })
        .when('/about-me', {
            templateUrl: 'about-me/about-me.html',
            controller: 'maincontroller'
        })
        .when('/projects', {
            templateUrl: 'projects/projects.html',
            controller: 'maincontroller'
        })
        .when('/contact-details', {
            templateUrl: 'contact-details/contact-details.html',
            controller: 'maincontroller'
        })


});



myApp1.controller('maincontroller',['$scope','$route', function ($scope, $route) {

}]);
