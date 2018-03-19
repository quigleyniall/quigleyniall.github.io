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

    $scope.initialize = function initMap() {
       var uluru= {lat: 53.979019, lng: -6.516521};
        var map = new google.maps.Map(document.getElementById('map_div'), {
            center: uluru,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.MAP
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }

    google.maps.event.addDomListener(window, 'load', $scope.initialize);

}]);

