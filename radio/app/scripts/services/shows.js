'use strict';
/* Services */
var apiUrl = 'http://radiodepaul.herokuapp.com/api/v2/';

angular.module('radioApp')
.factory('Shows', function($http, $routeParams){

  return {
    get: function(callback) {
      $http.jsonp(apiUrl + 'shows/' + $routeParams['id'] +'/?callback=JSON_CALLBACK').
      success(function(data, status, headers, config) {
            callback(data);
      });
    },
    query: function(callback) {
      $http.jsonp(apiUrl + 'shows/?callback=JSON_CALLBACK').
      success(function(data, status, headers, config) {
            callback(data);
      });
    } 
  }});
