'use strict';
var apiUrl = 'http://radiodepaul.herokuapp.com/api/v2/';

angular.module('radioApp')

.factory('Managers', function($http, $routeParams){
  return {  
    query: function(callback) {
    $http.jsonp(apiUrl + 'managers/?callback=JSON_CALLBACK').
    success(function(data, status, headers, config) {
         callback(data);
        });
  }
}
});