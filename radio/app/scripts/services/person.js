'use strict';
var apiUrl = 'http://radiodepaul.herokuapp.com/api/v2/';

angular.module('radioApp')

.factory('Staff', function($http){
  return {
        get: function(callback) {
      $http.jsonp(apiUrl + 'people/' + $routeParams['id'] +'/?callback=JSON_CALLBACK').
      success(function(data, status, headers, config) {
            callback(data);
      });
    } 
  }
});
