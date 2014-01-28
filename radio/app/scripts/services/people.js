'use strict';
var apiUrl = 'http://radiodepaul.herokuapp.com/api/v2/';

angular.module('radioApp')

.factory('Staff', function($http, $routeParams){

  return {
    query: function(callback) {
      $http.jsonp(apiUrl + 'people/?callback=JSON_CALLBACK').
      success(function(data, status, headers, config) {
            callback(data);
      });
    } 
  }});