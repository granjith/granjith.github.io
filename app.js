var mainModule = angular.module('myBlog', ['blog','ngRoute']);

mainModule.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "assets/partials/main.html",
            controller: "homeController as hc"
        })
        .when("/about", {
            templateUrl : "assets/partials/about.html"
        })
        .when("/contact", {
            templateUrl : "assets/partials/contact.html"
        });
});