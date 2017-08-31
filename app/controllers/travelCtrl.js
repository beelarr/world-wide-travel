"use strict";
console.log('controller for travel');

app.controller('TravelCtrl', function ($scope, TravelFactory) {
    $scope.books = [];
    TravelFactory.getTravel()
        .then(function (travelCollection) {
            for(var key in travelCollection){
                console.log('key', travelCollection[key]);
                $scope.books.push(travelCollection[key]);
            }
            console.log('travelArray', $scope.books);
        });
});