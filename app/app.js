"use strict";

var app = angular.module('TravelApp', []
)
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/show-all.html',
            })
            .otherwise('/');
    });

