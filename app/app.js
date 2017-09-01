"use strict";

var app = angular.module('TravelApp', ['ngRoute']
)
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/show-all.html',
                controller: "TravelCtrl"
            })
            .otherwise('/');
    });

