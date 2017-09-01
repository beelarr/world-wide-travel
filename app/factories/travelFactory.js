"use strict";

console.log('travel factory');

app.factory('TravelFactory', function ($q, $http) {
   let getTravel = () => {
       return $q ((resolve, reject) => {
           $http.get('./data/guides.json')
               .then((travelObject) => {
               console.log('travelObject', travelObject);
               let travelCollection = travelObject.data;
               console.log('travelCollection', travelCollection.guides);
               resolve(travelCollection.guides);
               })
               .catch((error) => {
               reject(error);
               });
       });
   };
   return {getTravel};
});