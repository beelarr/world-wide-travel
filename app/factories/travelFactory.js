"use strict";

console.log('travel factory');

app.factory('TravelFactory', function ($q, $http) {
   let getTravel = () => {
       return $q ((resolve, reject) => {
           $http.get('data/data.json')
               .then((travelObject) => {
               console.log('travelObject', travelObject.data);
               let travelCollection = travelObject.data;
               console.log('travelCollection', travelCollection);
               resolve(travelCollection);
               })
               .catch((error) => {
               reject(error);
               });
       });
   };
   return {getTravel};
});